**1.docker拉取OpenWRT镜像**  
`docker pull sulinggg/openwrt`  
**2.开启网卡混杂模式**  
`sudo ip link set eth0 promisc on`  
**3.创建 Docker 虚拟网络**  
`docker network create -d macvlan --subnet=192.168.2.0/24 --gateway=192.168.2.1 -o parent=eth0 macnet`  
**4.运行OpenWRT容器**  
`docker run --restart always -d --name=OpenWRT --network macnet --privileged sulinggg/openwrt /sbin/init`  
**5.docker exec -it OpenWRT bash**  
**6.`vi /etc/config/network`**