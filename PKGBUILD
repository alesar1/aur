# Maintainer: Piotr Gorski <lucjan.lucjanov@gmail.com>
# Contributor: Matt Raspberry <nixalot at nixalot dot com>

pkgname=netbsd-pkgsrc
_pkgname=pkgsrc
pkgver=2019Q3
pkgrel=1
pkgdesc="The NetBSD Packages Collection (pkgsrc)"
arch=('x86_64')
url="http://www.netbsd.org/docs/software/packages.html"
license=('BSD')
install='bootstrap.install'
provides=('bmake' 'pkgsrc')
source=(
    "ftp://ftp.netbsd.org/pub/${_pkgname}/${_pkgname}-${pkgver}/${_pkgname}-${pkgver}.tar.xz"
    "LICENSE"
    )
options=('!strip' 'emptydirs')

package() {

  install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  msg "Copying files to the package directory"
  mkdir -p "${pkgdir}/usr"
  cp -ar "${srcdir}/pkgsrc" "${pkgdir}/usr/pkgsrc"

  msg "Generation of profile settings"
  mkdir -p "${pkgdir}/etc/profile.d"
  echo "export PATH=/usr/pkg/bin:/usr/pkg/sbin:${PATH}" > "${pkgdir}/etc/profile.d/pkgsrc.sh"
  echo "export MANPATH=/usr/pkg/man:${MANPATH}" >> "${pkgdir}/etc/profile.d/pkgsrc.sh"
}

sha512sums=('9082c89262d29d5778e284b04859858d54a702c3f82ef068ee2f37bd9c4d1e7ca39fddfbb35e12cfab197e8e8077f70ccd35e1694450c0b8b9abb642e994730b'
            '78f634baef190d4a52187e69344e50ae9544c95bd6243ebb22af727092edbb61c021ec38de1a85e38b08cb046b71bdbf6cc869af2d9a6365cb93c92e342dfe96')


