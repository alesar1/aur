# Maintainer: Oirio Joshi <joshirio@protonmail.com>
pkgname=megacmd-bin
pkgver=1.1.0
pkgrel=2
pkgdesc="MEGA Command Line Interactive and Scriptable Application"
arch=('x86_64')
url="http://mega.nz/cmd"
license=('custom')
depends=('glibc' 'gcc-libs' 'openssl' 'sqlite' 'zlib' 'libpsl' 'icu' 'bash-completion' 'pcre' 'bzip2' 'xz')
provides=('megacmd' 'ffmpeg-mega')
source=('LICENSE')
source_x86_64=('https://mega.nz/linux/MEGAsync/Arch_Extra/x86_64/megacmd-x86_64.pkg.tar.xz')
sha256sums=('772d38729ab816eb94dbe30de277ffcc5af4e5d2c451cf7c071031ebe78f44ea')
sha256sums_x86_64=('aa94c4fe8a1931cc996f310aa92bfb948fd6a07cd7f7ecd5eb77ac8c202970f1')

package() {
  cd "$srcdir"
  
  # Files
  install -d "${pkgdir}/usr"
  install -d "${pkgdir}/etc"
  cp -R "$srcdir/usr" "${pkgdir}"
  cp -R "$srcdir/etc" "${pkgdir}"

  # Copy license
  install -Dm644 "$srcdir/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

