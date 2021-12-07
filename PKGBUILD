# Maintainer : Brian Filarsky <first initial last name at gmail>
# Contributor: Mark Lee <mark@markelee.com>
# Contributor: Familia < carlosfamilia at gmail dot com >
pkgname=rstudio-server-preview-bin
pkgver=2021.09.1+372
pkgrel=2
pkgdesc="A integrated development environment (IDE) for R (binary preview version from RStudio official website)"
arch=('x86_64')
license=('GPL')
url="http://www.rstudio.org/"
depends=('r>=3.0.1' 'sqlite' 'pam' 'postgresql-libs')
conflicts=('rstudio-server' 'rstudio-server-git' 'rstudio-server-bin')
sha256sums=('c58df09468870b89f1796445853dce2dacaa0fc5b7bb1f92b036fa8da1d1f8a3'
            '24b0545aa2a576c7d7480c0ef77d7641e2ebaadae856fd2a18f57871bd25fd88'
            '993a3096c2b113e6800f2abbd5d4233ebf1a97eef423990d3187d665d3490b92')
provides=("rstudio-server=${pkgver}")
source=("https://s3.amazonaws.com/rstudio-ide-build/server/bionic/amd64/rstudio-server-2021.09.1-372-amd64.deb"
        "rstudio-server.service"
        "rstudio")
install="${pkgname}".install

package() {
    printf "Converting debian package..."

    cd "${srcdir}"
    tar xf data.tar.xz -C "${pkgdir}"
    chmod 755 $(find ${pkgdir}/usr -type d)

    install -m755 -d "${pkgdir}/usr/bin"
    install -m755 -d "${pkgdir}/etc/rstudio"
    install -m644 -D "rstudio-server.service" "${pkgdir}/etc/systemd/system/rstudio-server.service"
    mkdir -p "${pkgdir}/etc/pam.d"
    install -m644 -D "rstudio" "${pkgdir}/etc/pam.d/"
}
