# Maintainer: Ashley Towns <mail(at)ashleytowns(dot)id(dot)au>

_version=2.2-SNAPSHOT-2015-12-10-a

pkgname=swift-bin
pkgver=${_version//-/.}
pkgrel=1
pkgdesc="The Swift programming language, the binary drops from the official website"
arch=('x86_64')
url="https://swift.org"
license=('apache')
depends=('icu55' 'ncurses5-compat-libs' 'libedit' 'python2' 'libutil-linux' 'libbsd' 'clang' 'libtinfo')
conflicts=('lldb' 'swift-language-git')
options=('!strip')
validpgpkeys=('7463A81A4B2EEA1B551FFBCFD441C977412B37AD')
provides=('swift-language')
replaces=('swift-language-bin')

source=(
  "https://swift.org/builds/ubuntu1510/swift-${_version}/swift-${_version}-ubuntu15.10.tar.gz"
  "https://swift.org/builds/ubuntu1510/swift-${_version}/swift-${_version}-ubuntu15.10.tar.gz.sig"
)
sha256sums=('ee518e50c6bbc414980ea2a58dfe0d41a76068dba2cff718430164089d998abc'
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

    # Update glibc map paths
    sed -i 's/\/x86_64-linux-gnu//g' "${pkgdir}/usr/lib/swift/glibc/module.map"

    # Move license
    install -dm755 ${pkgdir}/usr/share/licenses/${pkgname}
    mv ${pkgdir}/usr/share/swift/LICENSE.txt ${pkgdir}/usr/share/licenses/${pkgname}
}
