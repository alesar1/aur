# Maintainer: Ashley Towns <mail(at)ashleytowns(dot)id(dot)au>

_version=DEVELOPMENT-SNAPSHOT-2016-02-08-a

pkgname=swift-development-bin
pkgver=${_version//-/.}
pkgrel=1
pkgdesc="The Swift programming language, the development snapshot binary drops from the official website"
arch=('x86_64')
url="https://swift.org"
license=('apache')
depends=('icu55' 'ncurses5-compat-libs' 'libedit' 'python2' 'libutil-linux' 'libbsd' 'clang' 'libtinfo' 'python2-six' 'libxml2')
conflicts=('lldb' 'swift-language-git' 'swift-bin')
options=('!strip')
validpgpkeys=('7463A81A4B2EEA1B551FFBCFD441C977412B37AD')
provides=('swift-language')
replaces=('swift-language-bin')

source=(
  "https://swift.org/builds/development/ubuntu1510/swift-${_version}/swift-${_version}-ubuntu15.10.tar.gz"
  "https://swift.org/builds/development/ubuntu1510/swift-${_version}/swift-${_version}-ubuntu15.10.tar.gz.sig"
)
sha256sums=('24528d47dd8e4258e1d4be39183ef42096b4c60ce016f08338b557a491c9ad6c'
            'SKIP')

package() {
    tar -C "$pkgdir" -xf "swift-${_version}"*.tar.gz --strip 1

    # Permission fix
    find "${pkgdir}" -type d -exec chmod 755 {} +

    # Remove all unnecessary stuff
    rm -rf "${pkgdir}/usr/local"

    # Yuck! patching libedit SONAME
    find "${pkgdir}/usr/bin" -type f -exec sed -i 's/libedit\.so\.2/libedit\.so\.0/g' {} \;
    find "${pkgdir}/usr/lib" -type f -exec sed -i 's/libedit\.so\.2/libedit\.so\.0/g' {} \;

    # remove the six.py dumped in python's site packages
    rm "${pkgdir}/usr/lib/python2.7/site-packages/six.py"

    # Ensure the items have the right permissions..
    # some tarballs from upstream seem to have the wrong ones
    find "${pkgdir}/usr/bin" -type f -exec chmod a+rx {} \;
    find "${pkgdir}/usr/lib" -type f -exec chmod a+r {} \; 

    # Update glibc map paths
    sed -i 's/\/x86_64-linux-gnu//g' "${pkgdir}/usr/lib/swift/glibc/module.map"

    # Move license
    install -dm755 ${pkgdir}/usr/share/licenses/${pkgname}
    mv ${pkgdir}/usr/share/swift/LICENSE.txt ${pkgdir}/usr/share/licenses/${pkgname}
}
