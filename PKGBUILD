# Maintainer: Rodrigo Farias <rodrigofarias77@gmail.com>

pkgname=azure-cli-bin
pkgver=2.43.0
pkgrel=2
pkgdesc='Azure Command-Line Interface (Debian package)'
arch=('any')
url='https://github.com/Azure/azure-cli'
license=('MIT')
depends=('openssl-1.1' 'python')
conflicts=('azure-cli' 'python-azure-cli')
source=("https://packages.microsoft.com/repos/azure-cli/pool/main/a/azure-cli/azure-cli_${pkgver}-1~bullseye_all.deb")
md5sums=('e50ddc37275738db457ee989a124affc')

package () {
    cd "${pkgdir}"
    bsdtar -xf "${srcdir}/data.tar.xz"
    rm -r usr/share/doc
    find -name __pycache__ | xargs rm -r
}
