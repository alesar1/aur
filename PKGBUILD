# Maintainer: motherofmilk <id@devloq.net>

pipname=pyvips
pkgname=python-$pipname
pkgver=2.2.0
pkgrel=1
pkgdesc="binding for the libvips image processing library, API mode"
arch=(any)
url="https://github.com/libvips/pyvips"
license=(MIT)
depends=("libvips" "python" "python-cffi" "python-pkgconfig")
makedepends=("python-pip" "curl" "jq" "findutils")

pkgver() {
	curl -s https://pypi.org/pypi/$pipname/json | jq -r .info.version
}

package() {
	PIP_CONFIG_FILE=/dev/null pip install "${pipname}==${pkgver}" \
		--root=$pkgdir \
		--isolated \
		--no-user \
		--no-deps \
		--ignore-installed \
		--quiet

	python -O -m compileall "$pkgdir"
}
