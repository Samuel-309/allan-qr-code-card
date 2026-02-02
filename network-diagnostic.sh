#!/bin/bash

echo "Network Diagnostic Report"
echo "======================="

echo "\n1. Network Interfaces:"
ip addr

echo "\n2. Port 8080 Status:"
lsof -i :8080

echo "\n3. Firewall Rules:"
sudo iptables -L

echo "\n4. DNS Configuration:"
cat /etc/resolv.conf

echo "\n5. Routing Table:"
route -n

echo "\n6. Network Connectivity:"
ping -c 4 8.8.8.8

echo "\n7. Hostname Resolution:"
hostname
hostname -f

chmod +x /workspace/network-diagnostic.sh