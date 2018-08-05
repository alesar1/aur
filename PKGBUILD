# Maintainer: Ingo Sieverdingbeck <aur@sieverdingbeck.com>

pkgname=caff-git
_pkgname=caff
pkgver=r821.9c5bb78
pkgrel=1
pkgdesc="CA Fire and Forget is a script that helps you in keysigning."
arch=('any')
url="https://salsa.debian.org/stappers/pgp-tools"
license=('GPL')
depends=('gnupg' 'perl' 'perl-gnupg-interface' 'perl-mime-tools' 'perl-mailtools' 'perl-text-template' 'perl-any-moose' 'perl-net-idn-encode')
makedepends=('git')
conflicts=('signing-party' 'caff-svn')
md5sums=('SKIP')
source=("$_pkgname::git+https://salsa.debian.org/debian/signing-party.git")

pkgver() {
  cd "${srcdir}/${_pkgname}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "${srcdir}/${_pkgname}/${_pkgname}"
  make
}

package() {
  cd "${srcdir}/${_pkgname}/${_pkgname}"

  install -D -m755 "${srcdir}/${_pkgname}/${_pkgname}/caff" \
    "${pkgdir}/usr/bin/caff"
  install -D -m755 "${srcdir}/${_pkgname}/${_pkgname}/pgp-clean" \
    "${pkgdir}/usr/bin/pgp-clean"
  install -D -m755 "${srcdir}/${_pkgname}/${_pkgname}/pgp-fixkey" \
    "${pkgdir}/usr/bin/pgp-fixkey"

  install -D -m644 "${srcdir}/${_pkgname}/${_pkgname}/caff.1" \
    "${pkgdir}/usr/share/man/man1/caff.1"
  install -D -m644 "${srcdir}/${_pkgname}/${_pkgname}/pgp-clean.1" \
    "${pkgdir}/usr/share/man/man1/pgp-clean.1"
  install -D -m644 "${srcdir}/${_pkgname}/${_pkgname}/pgp-fixkey.1" \
    "${pkgdir}/usr/share/man/man1/pgp-fixkey.1"
}

# vim:set ts=2 sw=2 et:
