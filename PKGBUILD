# Maintainer: Det <nimetonmaili g-mail>
# Based on [extra]'s thunderbird

pkgname=thunderbird-beta-bin
_pkgname=thunderbird-beta
pkgver=52.0b4
_major=${pkgver/rc*}
_build=${pkgver/*rc}
pkgrel=1
pkgdesc="Standalone Mail/News reader - Bleeding edge binary version"
arch=('i686' 'x86_64')
url="https://www.mozilla.org/thunderbird"
license=('GPL' 'LGPL' 'MPL')
depends=('dbus-glib' 'gtk3' 'libxt' 'nss')
optdepends=('libcanberra: for sound support')
provides=("thunderbird=$pkgver")
conflicts=('thunderbird-beta')
install=$pkgname.install
source=("$pkgname.desktop"
        "$pkgname-safe.desktop"
        'vendor.js')
source_i686=("https://ftp.mozilla.org/pub/thunderbird/releases/$pkgver/linux-i686/en-US/thunderbird-$pkgver.tar.bz2")
source_x86_64=("https://ftp.mozilla.org/pub/thunderbird/releases/$pkgver/linux-x86_64/en-US/thunderbird-$pkgver.tar.bz2")
sha512sums=('fc83c23f67cc5d399bc655d2486936db3ab500bafe399a905a17a0b0f63ad9befb782fc9c07d467a65a80a00e3ce984700ec3cf60e4cb3e1b29b20954c6fa775'
            '3cf4194575041bbe344d6cd17e473eb78caf7e2e1aa8b1309151f7e4677c33571014ba6d7aba267398c3ba69c825c64363272b82b15f7dbb8ae5e3e825f439b7'
            'aeb444784732267f1b1e87e6084a776f82a1912c4c2637d2cf1de1c135dd9d41d2ef66d2bd3f9cbd3a79fad32d17ea6e2968ba644d5f887cb66ba6c09a2098f5')
sha512sums_i686=('617bf68b9ec4280edf53a962d4e8d5c7cf20ea439b70583826f6ffb4a51d30433af49dcb581a9d7740e7e4d50085ec1ccfb6b0d90dd71ee7af9f56c8de26abe9')
sha512sums_x86_64=('e90cb50577c150f4207b09449c35bbf431e5b6a8be9afce200646719b7610f155d7b7ef141cd5e3341dd2fa5226f3ccbedceed46fc6de071c62ca5943d9cb4a0')
# RC
if [[ $_build = ? ]]; then
  source_i686=("https://ftp.mozilla.org/pub/thunderbird/candidates/$_major-candidates/build$_build/linux-i686/en-US/thunderbird-$_major.tar.bz2")
  source_x86_64=("https://ftp.mozilla.org/pub/thunderbird/candidates/$_major-candidates/build$_build/linux-x86_64/en-US/thunderbird-$_major.tar.bz2")
fi

package() {
  # Create directories
  msg2 "Creating directory structure..."
  install -d "$pkgdir"/usr/bin
  install -d "$pkgdir"/usr/share/applications
  install -d "$pkgdir"/opt

  msg2 "Moving stuff in place..."
  # Install
  cp -r thunderbird/ "$pkgdir"/opt/$_pkgname
  install -m644 vendor.js "$pkgdir"/opt/$_pkgname/defaults/pref/

  # /usr/bin symlink
  ln -s /opt/$_pkgname/thunderbird "$pkgdir"/usr/bin/$_pkgname

  # Desktops
  install -m644 *.desktop "$pkgdir"/usr/share/applications/

  # Icons
  for i in 16x16 22x22 24x24 32x32 48x48 256x256; do
    install -d "$pkgdir"/usr/share/icons/hicolor/$i/apps/
    ln -s /opt/$_pkgname/chrome/icons/default/default${i/x*}.png \
          "$pkgdir"/usr/share/icons/hicolor/$i/apps/$_pkgname.png
  done
}
