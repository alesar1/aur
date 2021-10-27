# Maintainer: Ilango Rajagopal <ilangokul@gmail.com>

pkgbase=endpoint-verification
pkgname=("endpoint-verification" "endpoint-verification-chrome")
_pkgver="2021.07.22.c386220900-00"
pkgver="$(tr '-' '_' <<< $_pkgver)"
pkgrel=2
pkgdesc="Endpoint Verification Helper"
arch=(x86_64)
url="https://chrome.google.com/webstore/detail/endpoint-verification/callobklhcbilhphinckomhgkigmfocg"
license=(unknown)
sha256sums=("9599361fdf40c9b4f8bee13aaa6d2ef6f60ba66289cbb7b463677ebf2403dc32" "SKIP")
source=("https://packages.cloud.google.com/apt/pool/${pkgbase}_${_pkgver}_amd64_${sha256sums[0]}.deb"
	"endpoint-verification.service")

prepare() {
	tar -xf data.tar.gz
	mv etc/init.d/endpoint-verification opt/google/endpoint-verification/bin
	rmdir etc/init.d
}

package_endpoint-verification() {
	pkgdesc="Endpoint Verification Helper for Chromium"
	depends=(chromium)

	cp -a "$srcdir/opt" "$pkgdir"
	cp -a "$srcdir/usr" "$pkgdir"
	cp -a "$srcdir/etc" "$pkgdir"
	install -D -m0644 -t "$pkgdir/usr/lib/systemd/system" "$srcdir/endpoint-verification.service"

	mv "$pkgdir/etc/opt/chrome" "$pkgdir/etc/chromium"
	rmdir "$pkgdir/etc/opt"
}

package_endpoint-verification-chrome() {
	pkgdesc="Endpoint verification Helper for Google Chrome"
	depends=(google-chrome)
	provides=(endpoint-verification)
	conflicts=(endpoint-verification)
	
	cp -a "$srcdir/opt" "$pkgdir"
	cp -a "$srcdir/usr" "$pkgdir"
	cp -a "$srcdir/etc" "$pkgdir"
	install -D -m0644 -t "$pkgdir/usr/lib/systemd/system" "$srcdir/endpoint-verification.service"
}
