# Maintainer: Chih-Hsuan Yen <yan12125@gmail.com>
# Contributor: Alexander F Rødseth <xyproto@archlinux.org>
# Contributor: Daniel Micay <danielmicay@gmail.com>
# Contributor: frownlee <florez.brownlee@gmail.com>

pkgname=android-ndk
pkgver=r23
pkgrel=1
pkgdesc='Android C/C++ developer kit'
arch=('x86_64')
url='https://developer.android.com/ndk/'
license=('GPL' 'LGPL' 'custom')
options=('!strip' 'staticlibs')
backup=("etc/profile.d/$pkgname.sh")
install="$pkgname.install"
replaces=('android-ndk64')
depends=('glibc')
optdepends=(
  'ncurses5-compat-libs: for using gdb'
  'python2: various helper scripts'
  'python: various helper scripts'
)
source=("$pkgname.sh")
source_x86_64=("https://dl.google.com/android/repository/$pkgname-${pkgver/./}-linux.zip")
# SHA1 sums is kept to follow upstream releases https://github.com/android-ndk/ndk/issues/673
sha1sums=('2479a8d74428eb651ad2b9772ad655d7a90af410')
sha1sums_x86_64=('9bad35f442caeda747780ba1dd92f2d98609d9cd')
sha256sums=('2068618bc3e99149310f544be5d639ae183dc767d5a7157a07d8e024417b6017')
sha256sums_x86_64=('e3eacf80016b91d4cd2c8ca9f34eebd32df912bb799c859cc5450b6b19277b4f')

package() {
  install -Ddm755 "$pkgdir/opt"
  mv "$pkgname-${pkgver/./}" "$pkgdir/opt/$pkgname"

  install -Dm644 $pkgname.sh -t "$pkgdir/etc/profile.d/"

  # make sdkmanager and gradle recognize NDK
  install -Ddm755 "$pkgdir"/opt/android-sdk
  ln -s /opt/$pkgname "$pkgdir"/opt/android-sdk/ndk-bundle
}
