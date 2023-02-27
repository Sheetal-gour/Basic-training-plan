kubectl apply -f db-secrets.yaml
kubectl apply -f db-configs.yaml


kubectl apply -f app-db-deployment.yaml
kubectl apply -f app-flask.yaml

kubectl apply -f ingress.yaml

# kubectl describe services postgres-db-service | echo $(grep -i Endpoints:)
# minikube service flask-service


# curl employee.com
# curl http://192.168.58.2:30000

