# Maintainer: Forest Crossman <cyrozap at gmail dot com>

pkgname=digilent.adept.runtime
pkgver=2.16.1
pkgrel=1
pkgdesc="The Adept Runtime consists of the shared libraries, firmware images, and configuration files necessary to communicate with Digilent's devices."
arch=('i686' 'x86_64')
url="https://www.digilentinc.com/Products/Detail.cfm?Prod=ADEPT2"
license=('custom')
depends=('libusb')
conflicts=('libftd2xx')
options=('!strip')
backup=('etc/digilent-adept.conf' 'etc/ld.so.conf.d/digilent-adept-libraries.conf' 'etc/udev/rules.d/52-digilent-usb.rules')

if [[ $CARCH == 'i686' ]]; then
  source=("http://www.digilentinc.com/Data/Products/ADEPT2/${pkgname}_${pkgver}_i386.deb")
  sha1sums=('42d939af49701ffefc229720d45c47be7d1e1860')
  sha256sums=('da3f3e41c66120c2799768a10c3c9cc956e0d7068ddbe104a09f78b299e856f3')
elif [[ $CARCH == 'x86_64' ]]; then
  source=("http://www.digilentinc.com/Data/Products/ADEPT2/${pkgname}_${pkgver}_amd64.deb")
  sha1sums=('34968e47627b8f5dc3d92bcfb9e49e601c6fcfa1')
  sha256sums=('45f66f9803cad62fa6c4468903e12556c66ee95dd433f1c6e91cadca44e50679')
fi

package() {
  # Extract
  tar -xzf data.tar.gz --exclude="usr/share/lintian" -C "${pkgdir}"/

  # Correct paths
  [ -d "${pkgdir}"/usr/lib64 ] && mv "${pkgdir}"/usr/{lib64,lib}
  [ -d "${pkgdir}"/usr/sbin ] && mv "${pkgdir}"/usr/{sbin,bin}

  # License files
  install -dm 755 "${pkgdir}/usr/share/licenses/${pkgname}"
  ln -s "/usr/share/doc/${pkgname}/copyright" "${pkgdir}/usr/share/licenses/${pkgname}/copyright"
  ln -s "/usr/share/doc/${pkgname}/EULA" "${pkgdir}/usr/share/licenses/${pkgname}/EULA"
}
