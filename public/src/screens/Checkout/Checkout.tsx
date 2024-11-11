import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import CheckoutHeader from './CheckoutHeader';
import TotalItems from './TotalItems';
import store from '../../redux/store';
import { CheckOutStyles as styles } from './styles';
import { postOrder } from '../../apis/postOrder';
import { fetchProductGrades } from '../../apis/fetchProductGrades';
import { postOrderLine } from '../../apis/postOrderLine';
import ThankYouImage from '../../assets/thankYouImage';
import ContinueButton from '../../assets/continueButton';
import PlaceOrder from '../../assets/placeOrderButton';
import ContinueShopping from '../../assets/ContinueShopping';
import { useSelector } from 'react-redux';
function Checkout({navigation} : any) {
  const dummyItem = useSelector((state: any) => state.reducer); 
  var price = 0;
  for(let i = 0 ; i < dummyItem.length ; i++){
    price += dummyItem[i].price * dummyItem[i].quantity;
  }
  const [step, setStep] = useState('ShippingAddress'); 
  type Address = { id: number; address: string };
  type Payment = { id: number; method: string };
  const [ShippingAddress, setShippingAddress] = useState<Address | null>(null);
  const [BillingAddress, setBillingAddress] = useState<Address | null>(null);
  const [PaymentMethod, setPaymentMethod] = useState<Payment | null>(null);
  const [order_id , setOrderID] = useState<number>(0);
  const addresses: { id: number; address: any; addressHeading: any; }[] = [];
  const paymentMethods = [
    { id: 1, method: 'Cash' },
    { id: 2, method: 'Credit' },
    { id: 3, method: 'Cheque' },
    {id : 4, method : 'Debit'},
    {id : 5, method : 'Net Banking'},
    {id : 6, method : 'UPI'},
  ];
  const add = store.getState().setAddressReducer;
  const cart = store.getState().reducer;
  for (let i = 0; i < add.length; i++) { 
    const tmp = add[i].first_line + ',\n' + add[i].second_line + ', ' + add[i].city + ', ' + add[i].state + ', ' +add[i].country + ' - '+ add[i].pincode;
    addresses.push({id : i, address : tmp, addressHeading : add[i].heading});
  }
  const completePayment = async () => {
    setStep('ThankYou');
    const order_payload = {
        "userid" : 1,
        "paymentMode":PaymentMethod?.method,
        "created_at" : new Date(),
      };
      const gradeDetails = await fetchProductGrades();
      const order_response = await postOrder(order_payload);
      const order_line_payload : any = [];
      for(let i = 0; i < cart.length; i++){
        setOrderID(order_response.ID);
        order_line_payload.push({
          "OrderID" : order_response.ID,
          "ProductGradeID" : gradeDetails[i][0].ID,
          "Qty" : cart[i].quantity,
          "Price" : cart[i].price,  
        });
      }
      const response = await postOrderLine(order_line_payload);
  };
  const renderStep = () => {
    if(step === 'ShippingAddress'){
        return (
          <View style={{gap : 10}}>
            <View style={styles.addressHeadingContainer}> 
              <Text style = {styles.addressTypeBlob}>1</Text>
              <Text style = {styles.addressType}>Select Shipping Address:</Text>
            </View> 
            {addresses.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  // console.log(item);
                  setShippingAddress(item)
                }}
                style={{borderWidth: 1,borderColor: ShippingAddress?.id === item.id ? '#f15927' : 'white',borderRadius : 10,}}>
                <View style={styles.addressBox}>
                  <Text style={{fontWeight : 'bold' , color : 'black'}}>{item.addressHeading}</Text>
                  <Text></Text> 
                  <Text style={{ color : 'grey'}}>{item.address}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        );
      }
      else if(step === 'BillingAddress'){
        return (
          <View style={{gap : 10}}>
            <View style={styles.addressHeadingContainer}>
              <Text style = {styles.addressTypeBlob}>2</Text>
              <Text style = {styles.addressType}>Select Billing Address:</Text>
            </View>
            {addresses.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => setBillingAddress(item)}
                style={{borderWidth: 1,borderColor: BillingAddress?.id === item.id ? '#f15927' : 'white',borderRadius : 10,}}>
                <View style={styles.addressBox}>
                  <Text style={{fontWeight : 'bold' , color : 'black'}}>{item.addressHeading}</Text>
                  <Text></Text>
                  <Text style={{ color : 'grey'}}>{item.address}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        );
      }

      else if(step === 'PaymentMethod'){
        return (
          <View style={{gap : 10}}>
             <View style={styles.addressHeadingContainer}>
              <Text style = {styles.addressTypeBlob}>3</Text>
              <Text style = {styles.addressType}>Select Payment Method:</Text>
            </View>
            {paymentMethods.map((method) => (
              <TouchableOpacity
                key={method.id}
                onPress={() => {
                  // console.log(method);
                  setPaymentMethod(method)
                }}
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: PaymentMethod?.id === method.id ? '#f15927' : 'white',
                  marginVertical: 5,
                }}>
                <Text style={{color : 'black'}} >{method.method}</Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      }

      else if(step === 'ThankYou'){
        return (
          <View style = {styles.thankYouContainer}>
            <View>
              <ThankYouImage/>
            </View>
            <Text style={styles.thankYouTxt}>Thank you Tashvik!</Text>
            <Text style = {styles.orderIDTxt}>Your order has been placed successfully with order id {order_id}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ProductScreen' as never)}>
              <View>
                <ContinueShopping/>
              </View>
            </TouchableOpacity>
          </View>
        );
      }

      else{
        return(
          <View>
            <Text>HOW DID YOU COME TO BE HERE ? THERE IS A SERIOUS BUG IN UR CODE</Text>
          </View>
        );
      }
  }


  const handleNext = () => {
    if (step === 'ShippingAddress') {
      setStep('BillingAddress');
    } else if (step === 'BillingAddress') {
      setStep('PaymentMethod');
    } 
  };

  return (
    <View style={{ flex: 1, padding: 20 , backgroundColor : "white" }}>
      <CheckoutHeader />
      <TotalItems />
      <View style={{ flex: 1, marginTop: 20 }}>
        {renderStep()}
      </View>
      {step !== 'ThankYou' && (
        <View style={{ marginBottom: 20 }}>
           <View style={styles.checkOutContainer}>
        <Text style={styles.checkOutTextBottom}>₹{price}</Text>
        <TouchableOpacity onPress={() => step === "PaymentMethod" ? completePayment() : handleNext()}
                                  disabled={(step === 'ShippingAddress' && !ShippingAddress) ||
                                  (step === 'BillingAddress' && !BillingAddress) ||
                                  (step === 'PaymentMethod' && !PaymentMethod)}>
        <View style={styles.checkOut}>
          {step === 'PaymentMethod' ? <PlaceOrder /> : <ContinueButton />}
        </View>
        </TouchableOpacity>
        </View>
        </View>
      )}
    </View>
  );
}

export default Checkout;
