# Maintainer: L. Bradley LaBoon <me@bradleylaboon.com>
pkgname=splunk
basever=8.2.6
splunkver=${basever}-a6fe1ee8894b
# Splunk is inconsistent with the length of their version numbers
if [ ${#basever} -gt 5 ]; then
	pkgver=${basever}
else
	pkgver=${basever}.0
fi
pkgrel=1
epoch=3
pkgdesc="Statistical analysis and search tool for logs and machine data"
url="https://www.splunk.com/"
arch=('x86_64')
license=('custom')
install="$pkgname.install"
source=("$pkgname.service" "$pkgname.sysusers" "$pkgname.tmpfiles")
source_x86_64=("https://download.splunk.com/products/splunk/releases/$basever/linux/$pkgname-$splunkver-Linux-x86_64.tgz")
sha256sums=('ca96b85750a0592208facc747bbe1eb22b0a35b6dee841e6f51f1ad6a9157757'
            '236deb352218f9551df894efd613aad201afb20713ac563ab381f68b6ffce853'
            '56b70a2395270fc038987241504df11c390f3234d5be640bbc6a311b978e8475')
sha256sums_x86_64=('fcb8620cfe728ab3d18f8c5ca029c69be60f715d99c2c142c34f1fd0cece74ba')
options=(!strip)

package() {
	cd "$srcdir"
	install -vDm 644 ${pkgname}.sysusers "${pkgdir}/usr/lib/sysusers.d/${pkgname}.conf"
	install -vDm 644 ${pkgname}.tmpfiles "${pkgdir}/usr/lib/tmpfiles.d/${pkgname}.conf"
	install -Dm644 "$pkgname/license-eula.txt" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
	install -Dm644 "$pkgname.service" "$pkgdir/usr/lib/systemd/system/$pkgname.service"
	mkdir "$pkgdir/opt"
	cp -r "$pkgname" "$pkgdir/opt/"
}
