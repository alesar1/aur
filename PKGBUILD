# Maintainer: Niels Mentink niels.mentink@gmail.com

pkgname=wpe-cli-bin
_pkgname=wpe-cli
pkgver=0.14.0
pkgrel=1
pkgdesc='An aur package for the wpe-cli'
arch=('x86_64')
url='https://wpengine.com/'
license=('MIT')
provides=('wpe')
conflicts=('wpe')
options=('!strip')
source=("https://s3-us-east-2.amazonaws.com/wpeclibinaries/$_pkgname/v$pkgver/${_pkgname}_${pkgver}_linux_amd64.tar.gz")
md5sums=('0126f72c223e7502381cbf88aae821f4')

package() {
  install -Dm755 "${srcdir}/wpe" "${pkgdir}/usr/local/bin/wpe"
}
