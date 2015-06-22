# Contributor: Lorenzo Tomei <tomeil@tiscali.it>

pkgname=j8-git
pkgver=1.4.2
pkgrel=2
pkgdesc='J is a modern, high-level, general-purpose, high-performance programming language'
arch=('i686' 'x86_64')
url='http://www.jsoftware.com'
license=('GPL3'  'LGPL')
depends=('ncurses' 'qt5-tools' 'qt5-websockets' 'qt5-webengine' 'wget' 'pcre')
source=('http://www.jsoftware.com/gitlist/qtide.git/zipball/master' 'http://www.databaserossoverde.it/jsoftware/j804_env_20150622.tar.gz')
md5sums=('SKIP' '2c3b921dcb2ce7f23a4836fd11eeaa0c')
if [ "${CARCH}" = x86_64 ]; then
_xarch=x86_64
_noarch=i686
else
_xarch=x86
_noarch=x86_64
fi

pkgver() {
_version=$(sed -n -e 2p "${srcdir}"/lib/lib.pro)
echo ${_version:10}
}

build() {
cd "${srcdir}"/lib
qmake && make
cd "${srcdir}"/main
qmake && make
}

package() {
cd "${srcdir}"
cp -a jenv/* "${pkgdir}"/
mv "${pkgdir}"/usr/lib/j8/bin/"${CARCH}"/* "${pkgdir}"/usr/lib/j8/bin/
rm -d "${pkgdir}"/usr/lib/j8/bin/"${CARCH}"
rm -r "${pkgdir}"/usr/lib/j8/bin/"${_noarch}"
cp -a bin/linux-"${_xarch}"/release/*  "${pkgdir}"/usr/lib/j8/bin/
echo "${pkgname}-${pkgver}-${pkgrel}-${CARCH}.pkg.tar.xz (Arch Linux package)" > ${pkgdir}/usr/lib/j8/bin/installer.txt
chown -R nobody:nobody "${pkgdir}"/srv/j8
} 
