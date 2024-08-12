# echo "Switching to branch master"
# git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
sudo rm -rf /var/www/192.168.1.19/*
sudo cp -r dist/* /var/www/192.168.1.19/

echo "Done!"