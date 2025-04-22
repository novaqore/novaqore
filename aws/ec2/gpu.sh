lspci -nn | grep -E 'VGA|Display' #Check for GPUs
lspci -nn | grep -i "AMD\|Radeon" #Check AMD Radeon
#Advanced Micro Devices, Inc. [AMD/ATI] Navi 12 [Radeon Pro V520/V540] [1002:7362] (rev c3)

lsmod | grep amdgpu #Check Kernel Driver

sudo apt-get update --fix-missing && sudo apt-get upgrade -y
sudo apt install build-essential -y
sudo apt install linux-firmware linux-modules-extra-aws -y
sudo reboot

wget https://repo.radeon.com/amdgpu-install/6.3.4/ubuntu/noble/amdgpu-install_6.3.60304-1_all.deb #Ubuntu 24
sudo chown _apt:root amdgpu-install_6.3.60304-1_all.deb
sudo apt install ./amdgpu-install_6.3.60304-1_all.deb

amdgpu-install --usecase=workstation --vulkan=pro -y
sudo reboot
sudo dmesg | grep amdgpu
