# Maintainer: Chih-Hsuan Yen <yan12125@gmail.com>
# Contributor: Alexander F Rødseth <xyproto@archlinux.org>
# Contributor: Daniel Micay <danielmicay@gmail.com>
# Contributor: frownlee <florez.brownlee@gmail.com>

pkgname=android-ndk-beta
_pkgname=${pkgname/-beta*/}
pkgver=r18_beta1
pkgrel=2
pkgdesc='Android C/C++ developer kit (beta)'
arch=('x86_64')
url='https://developer.android.com/ndk/'
license=('GPL' 'LGPL' 'custom')
options=('!strip' 'staticlibs')
backup=('etc/profile.d/android-ndk-beta.sh')
install="$pkgname.install"
depends=('glibc')
optdepends=(
  'python: various helper scripts'
)
source=('android-ndk-beta.sh' "https://dl.google.com/android/repository/${_pkgname}-${pkgver/_/-}-linux-x86_64.zip")
sha256sums=('cadefdccf5da51dc56156fbc41945a2c27d913d12a043b32f47e15f253b0943d'
            'c9fe5b5102a596d3f8ee65f26e34a5bc994b2ca8bfa5a884444205201324f4c2')

package() {
  install -d "$pkgdir/opt"
  mv "$_pkgname-${pkgver/_/-}" "$pkgdir/opt/$pkgname"

  install -Dm755 $pkgname.sh "$pkgdir/etc/profile.d/$pkgname.sh"

  # make sdkmanager and gradle recognize NDK
  install -Ddm755 "$pkgdir"/opt/android-sdk
  ln -s /opt/$pkgname "$pkgdir"/opt/android-sdk/ndk-bundle
}

# vim:set ts=2 sw=2 et:
