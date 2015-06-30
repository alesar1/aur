# Maintainer: Konstantin Shalygin (k0ste@opentech.ru)

_sieve='sieve'
pkgname=thunderbird-${_sieve}
_pkgver='0.2.3'
pkgver=${_pkgver}g
pkgrel='0'
pkgdesc='This Extension implements the ManageSieve protocol for securely managing Sieve Script on a remote IMAP server'
arch=('any')
url=https://github.com/thsmi/${_sieve}
license=('AGPL')
depends=('thunderbird')
source=("${_sieve}::git+$url.git")
sha256sums=("SKIP")

package() {
  pushd "$srcdir/$_sieve/nightly/$_pkgver"
  install -Dm644 "$_sieve-$pkgver.xpi" "$pkgdir/usr/lib/thunderbird/extentions/${_sieve}@mozdev.org.xpi"
  popd
}
