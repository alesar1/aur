# Maintainer: Chih-Hsuan Yen <yan12125@gmail.com>
# Contributor: Alexander F Rødseth <xyproto@archlinux.org>
# Contributor: Daniel Micay <danielmicay@gmail.com>
# Contributor: frownlee <florez.brownlee@gmail.com>

pkgname=android-ndk-beta
_pkgname=${pkgname/-beta*/}
pkgver=r18_beta2
pkgrel=2
pkgdesc='Android C/C++ developer kit (beta)'
arch=('x86_64')
url='https://developer.android.com/ndk/'
license=('GPL' 'LGPL' 'custom')
options=('!strip' 'staticlibs')
backup=("etc/profile.d/$pkgname.sh")
install="$pkgname.install"
depends=('glibc')
optdepends=(
  'python: various helper scripts'
)
source=("$pkgname.sh")
source_x86_64=("https://dl.google.com/android/repository/${_pkgname}-${pkgver/_/-}-linux-x86_64.zip")
# SHA1 sums is kept to follow upstream releases https://github.com/android-ndk/ndk/issues/673
sha1sums=('b0a3c3d4e148c1049f9c8b12f2632840630ea4db')
sha1sums_x86_64=('0bc218b4212ed30a31904dc75ffead6ecc9bbd30')
sha256sums=('a39422d48174302e1ee27f07031f20adc78224d12c17a5451129a88b47c901c1')
sha256sums_x86_64=('4b1f7c588788aee43ee6e2de07f3d9988610f59644ba73175627573147525b36')

package() {
  install -d "$pkgdir/opt"
  mv "$_pkgname-${pkgver/_/-}" "$pkgdir/opt/$pkgname"

  install -Dm755 $pkgname.sh "$pkgdir/etc/profile.d/$pkgname.sh"

  # make sdkmanager and gradle recognize NDK
  install -Ddm755 "$pkgdir"/opt/android-sdk
  ln -s /opt/$pkgname "$pkgdir"/opt/android-sdk/ndk-bundle
}

# vim: set ts=2 sw=2 et ft=sh:
