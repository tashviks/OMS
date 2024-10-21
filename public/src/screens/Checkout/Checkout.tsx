import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import CheckoutHeader from './CheckoutHeader';
import TotalItems from './TotalItems';
import { useSelector } from 'react-redux';
import { CheckOutStyles as styles } from './styles';

function Checkout() {

  // get the cartData from redux store
 
  const [step, setStep] = useState('ShippingAddress'); 
  type Address = { id: number; address: string };
  type Payment = { id: number; method: string };
  const [ShippingAddress, setShippingAddress] = useState<Address | null>(null);
  const [BillingAddress, setBillingAddress] = useState<Address | null>(null);
  const [PaymentMethod, setPaymentMethod] = useState<Payment | null>(null);

  const addresses = [
    { id: 1, address: 'Sy. No. 95/1, Choudadenahalli, village, Dommasandra Post, sarjapura holi, Anekal Taluk, Bengaluru, Karnataka 562125' , addressHeading : 'Home' },
    { id: 2, address: '177A Bleecker Street' , addressHeading : 'Office' },
    { id: 3, address: '221B Baker Street' , addressHeading : 'Other' },
    { id: 4, address: '221B Baker Street' , addressHeading : 'Other' },
    { id: 5, address: '221B Baker Street' , addressHeading : 'Other' }, 
  ];

  const paymentMethods = [
    { id: 1, method: 'Cash' },
    { id: 2, method: 'Credit' },
    { id: 3, method: 'Request' },
  ];

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
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: ShippingAddress?.id === item.id ? '#f15927' : 'white',
                  marginVertical: 2,
                }}>
                <Text style={{fontWeight : 'bold'}}>{item.addressHeading}</Text>
                <Text></Text> 
                <Text>{item.address}</Text>
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
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: BillingAddress?.id === item.id ? '#f15927' : 'white',
                  marginVertical: 2,
                }}>
                <Text style={{fontWeight : 'bold'}}>{item.addressHeading}</Text>
                <Text></Text>
                <Text>{item.address}</Text>
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
                <Text>{method.method}</Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      }

      else if(step === 'ThankYou'){
        return (
          <View>
            <Text>Thank you Tashvik!</Text>
            <Text>Your order has been placed successfully with order id which is to be fetched from db and is to be updated as well.</Text>
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
    } else if (step === 'PaymentMethod') {
      setStep('ThankYou');
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <CheckoutHeader />
      <TotalItems />
      <View style={{ flex: 1, marginTop: 20 }}>
        {renderStep()}
      </View>
      {step !== 'ThankYou' && (
        <View style={{ marginBottom: 20 }}>
          <Button
            title="Next"
            onPress={handleNext}
            disabled={
              (step === 'ShippingAddress' && !ShippingAddress) ||
              (step === 'BillingAddress' && !BillingAddress) ||
              (step === 'PaymentMethod' && !PaymentMethod)
            }
          />
        </View>
      )}
    </View>
  );
}

export default Checkout;
