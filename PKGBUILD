# Maintainer: sukanka <su975853527@gmail.com>


pkgname=bbswitch-ati-git
pkgver=v0.8.2.g9dd2270
pkgrel=1
pkgdesc='kernel module allowing to switch also AMD integrated and Nvidia dedicated graphics card on Optimus laptops (Git version)'
arch=('i686' 'x86_64')
license=('GPL')
url='http://github.com/Bumblebee-Project/bbswitch'
provides=('bbswitch')
conflicts=('bbswitch' 'bbswitch-dkms' 'bbswitch-git-dkms')
makedepends=('linux-headers' 'git')
source=("${pkgname}::git+https://github.com/Bumblebee-Project/bbswitch.git#branch=develop"
'https://www.qua-it.org/XFCE/shots/share-with-pclos/pclos/bbswitch-v0.8-proc_ops-struct.patch'
)
sha256sums=('SKIP' 'SKIP')
install=bbswitch-ati.install

pkgver () {
  cd "${srcdir}/${pkgname}"
  git describe --always | sed 's|-|.|g'
}

build() {
    kernel_ver=$(uname -r |cut -f1 -d'-')
    cpu=$(cat /proc/cpuinfo | grep name | cut -f2 -d: | uniq | cut -f2 -d' ')
    cd "${srcdir}/${pkgname}"
    if [ $kernel_ver > "5.6" ]; then 
        git apply "${srcdir}"/bbswitch-v0.8-proc_ops-struct.patch
        echo 12225555
    fi
    if [ "$cpu" = "AMD" ]; then
        echo "AMD integrated card detected"
        echo "${srcdir}/${pkgname}"/bbswitch.c
        sed -i 's/PCI_VENDOR_ID_INTEL/PCI_VENDOR_ID_ATI/g' "${srcdir}/${pkgname}"/bbswitch.c
    fi
    make
}

package() {
  cd ${srcdir}/${pkgname}
  _KERNELS=`uname -r`
  mkdir -p "${pkgdir}/usr/lib/modules/${_KERNELS}/extramodules"
        install -m644 bbswitch.ko "${pkgdir}/usr/lib/modules/${_KERNELS}/extramodules"
        gzip "${pkgdir}/usr/lib/modules/${_KERNELS}/extramodules/bbswitch.ko"
}
 
