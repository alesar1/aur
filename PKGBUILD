# Maintainer: Moritz Lipp <mlq@pwmt.org>
pkgname=asix-ax88179-dkms
pkgver=1.14.2
pkgrel=2

_dirname=AX88179_178A_LINUX_DRIVER_v${pkgver}_SOURCE
_modname=ax88179_178a

pkgdesc="Driver for USB ASIX Ethernet model AX88179"
arch=('i686' 'x86_64')
url="http://www.asix.com.tw/products.php?op=pItemdetail&PItemID=131;71;112&PLine=71"
license=('GPL')
depends=('dkms' 'linux-headers')
install=${_modname}-dkms.install
source=("http://www.asix.com.tw/FrootAttach/driver/AX88179_178A_LINUX_DRIVER_v${pkgver}_SOURCE.tar.gz"
    "dkms.conf"
    "blacklist-${_modname}.conf"
    "${_modname}-dkms.conf"
    "${_modname}-dkms.install"
    "0001-No-date-time.patch"
)
md5sums=('6eff642a7dbe3e01a9f27f622bb86fc5'
         '514d0362d678e4ce67d40a6a23bbd8fd'
         'd6005a9e529a254e622b52c17134013f'
         '1f0152ac565eb09470fb8dfbb98433e2'
         '24a755ddaa8111dd2ce0ad898ab9d3f3'
         '6a7e1bd5ec3d1e77cde2c3e2d6d9ddea')

prepare() {
  cd "${srcdir}/${_dirname}"

  patch -p1 < "${srcdir}/0001-No-date-time.patch"
}

package() {
  # Install files
	installdir="${pkgdir}/usr/src/${_modname}-dkms-${pkgver}"
	
	install -dm755 "${installdir}"
	install -m644 "${srcdir}/dkms.conf" "${installdir}"

	install -dm755 "${pkgdir}/etc/modprobe.d"
	install -m644 "${srcdir}/blacklist-${_modname}.conf" \
    "${pkgdir}/etc/modprobe.d/blacklist-${_modname}.conf"

	install -dm755 "${pkgdir}/etc/modules-load.d"
	install -m644 "${srcdir}/${_modname}-dkms.conf" \
    "${pkgdir}/etc/modules-load.d/${_modname}-dkms.conf"

  sed -e "s/@VERSION@/${pkgver}/" "${srcdir}/dkms.conf" > "${installdir}/dkms.conf"

  # Install module source
	cd "$srcdir/$_dirname"
 	
 	for d in `find . -type d`; do
		install -dm755 "${installdir}/$d"
	done
	
	for f in `find . -type f`; do
	  install -m644  "${srcdir}/${_dirname}/$f" "${installdir}/$f"
	done
}
