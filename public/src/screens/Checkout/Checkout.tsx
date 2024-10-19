import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import CheckoutHeader from './CheckoutHeader';
import TotalItems from './TotalItems';

function Checkout() {
  const [step, setStep] = useState('ShippingAddress'); 
  type Address = { id: number; address: string };
  type Payment = { id: number; method: string };
  const [ShippingAddress, setShippingAddress] = useState<Address | null>(null);
  const [BillingAddress, setBillingAddress] = useState<Address | null>(null);
  const [PaymentMethod, setPaymentMethod] = useState<Payment | null>(null);

  const addresses = [
    { id: 1, address: 'Aditya VR Colive Kormangala' , addressHeading : 'Home' },
    { id: 2, address: '177A Bleecker Street' , addressHeading : 'Office' },  
  ];

  const paymentMethods = [
    { id: 1, method: 'Cash' },
    { id: 2, method: 'Credit' },
    { id: 3, method: 'Request' },
  ];

  const renderStep = () => {
    if(step === 'ShippingAddress'){
        return (
          <View>
            <Text>Select Shipping Address:</Text>
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
                  borderColor: ShippingAddress?.id === item.id ? 'lightgreen' : 'white',
                  marginVertical: 5,
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
          <View>
            <Text>Select Billing Address:</Text>
            {addresses.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => setBillingAddress(item)}
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: BillingAddress?.id === item.id ? 'lightgreen' : 'white',
                  marginVertical: 5,
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
          <View>
            <Text>Select Payment Method:</Text>
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
                  borderColor: PaymentMethod?.id === method.id ? 'lightgreen' : 'white',
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
