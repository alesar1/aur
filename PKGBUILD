# Maintainer: Jingbei Li <i@jingbei.li>

_pkgname=lucene
pkgname=apache-$_pkgname
pkgver=7.2.0
pkgrel=1
pkgdesc="Apache Lucene is a high-performance, full-featured text search engine library written entirely in Java."
arch=('any')
url="https://lucene.apache.org/"
license=('APACHE')
depends=('java-runtime')
_mirror="http://mirrors.tuna.tsinghua.edu.cn/apache"
source=("$_mirror/$_pkgname/java/$pkgver/$_pkgname-${pkgver}.tgz")
md5sums=('f93fd420f45ac060eed1f2818b1a8a43')

package() {
	cd "${srcdir}/$_pkgname-$pkgver"
	mkdir -p $pkgdir/usr/share/java/$pkgname
	find . -type f -name '*.jar' -exec mv {} $pkgdir/usr/share/java/$pkgname \;
	install -Dm644 "LICENSE.txt" "${pkgdir}/usr/share/licenses/${pkgname}/license.txt"
}
