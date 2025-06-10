

Desde la raiz del proyecto, ejecutar:
1_ cp back/.env_copy back/.env && rm back/.env_copy
2_ sudo docker compose up -d


Retro

sudo rm  -rf data
sudo rm -rf init_db
cp back/.env back/.env_copy && rm back/.env
sudo rm -rf back/vendor
sudo rm -rf front/node_modules
