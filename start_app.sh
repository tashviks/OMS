cd server
sleep 2
minikube start
sleep 5
kubectl get pods
cd ../public
# npm install
npm start
sleep 5
echo "a"
sleep 2
cd ../server
kubectl port-forward oms-backend-554b4b44b6-ddck5 8080:8080 