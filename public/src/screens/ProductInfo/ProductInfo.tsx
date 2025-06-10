import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet , ScrollView, Button } from 'react-native'
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh } from 'three' // Import Mesh type for the ref
import ProductInfoHeader from './ProductInfoHeader'
import ProductInfoImageGallery from './ProductInfoImageGallery'
import ProductItemChoice from './ProductItemChoice'
import { ProductInfoStyles as styles } from './styles'
import { RouteProp } from '@react-navigation/native'
import ProductDescription from './ProductDescription'

// React Three Fiber Box component
function Box(props: any) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>(null!) // Initialize with null! and type assertion
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += 0.01
      ref.current.rotation.y += 0.01
    }
  })
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

interface ProductProps {
    ID : number;
    SKU : string;
    Name: string;
    Brand: string;
    Review: number;
    Price: number;
    Grade: string[];
    BagSize: string[];
    MinOrderQty: number;
    MaxOrderQty: number;
    InStock: number;
    Title: string;
    Image: string;
    mrp : number;
}  
interface RouteParams {
params: { product: ProductProps; };
}

const ProductInfo = ({ route }: { route: RouteParams }) => { 
  const {product} = route.params;
  return (
    <View style={styles.container}>
        <ProductInfoHeader />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <ProductInfoImageGallery product={product} />
            <ProductItemChoice 
            id={product.ID}
            sku={product.SKU} 
            name={product.Name} 
            brand={product.Brand} 
            review={product.Review} 
            price={product.Price} 
            grade={product.Grade} 
            bagSize={product.BagSize} 
            title={product.Title}
            image={product.Image}
            minOrderQty={product.MinOrderQty}
            maxOrderQty={product.MaxOrderQty} 
            inStock={product.InStock} 
            />
            {/* Add the Canvas for the 3D scene */}
            <View style={{height: 300, width: '100%'}}>
              <Canvas style={{ flex:1, backgroundColor: '#f0f0f0' }}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box position={[-1.2, 0, 0]} />
                <Box position={[1.2, 0, 0]} />
              </Canvas>
            </View>
        </ScrollView>
    </View>
  )
}
export default ProductInfo