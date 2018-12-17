A simple example to show how to serve static files from docker using nginx
Run this command
```
docker build -t some-name .
```

Once the build is complete and the image is created, run the docker 

```
docker run -p 5000:90 some-name
```

Navigate to http://localhost:5000 to see the changes