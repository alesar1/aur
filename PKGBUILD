# Maintainer:  Travis Collins <erbrecht at pobox dot com>
pkgname='noisetorch'
pkgver=0.10.0
pkgrel=1
pkgdesc='Real-time microphone noise suppression on Linux.'
arch=('x86_64')
url=https://github.com/lawl/NoiseTorch
license=('GPL3')
depends=('pulseaudio' 'polkit')
makedepends=('git' 'go' 'cmake')
provides=('noisetorch')
source=("${pkgver}-${pkgrel}.tar.gz::https://github.com/lawl/NoiseTorch/archive/${pkgver}.tar.gz"
        "main.patch"
        "version.go")
sha256sums=('f0887a2c8c6cd4c863e4d67da2bcfb2b3900e9f5bfd5b0c1eaef576cc67948c7'
            'dd930c1e39e9c4c6595f604178223b606a6fdce39bcc5ef7e36e2d58cbf5aa0c'
            '1f2f114638a818fe87ad10b9c7eab91f75f75f1d4e49c0a69f989f76a0d9d0a2')

prepare() {
	cd NoiseTorch-${pkgver}
	patch -u main.go ../main.patch
	sed "s/VERSIONTOKEN/${pkgver}/" ../version.go > version.go
	export GOPATH="$srcdir/go"
	go clean -modcache
}

build() {
	cd NoiseTorch-${pkgver}/c/ladspa
	make
	cd ${srcdir}/NoiseTorch-${pkgver}
	export CGO_CPPFLAGS="${CPPFLAGS}"
	export CGO_CFLAGS="${CFLAGS}"
	export CGO_CXXFLAGS="${CXXFLAGS}"
	export CGO_LDFLAGS="${LDFLAGS}"
	export GOFLAGS="-buildmode=pie -trimpath -mod=readonly -modcacherw"
	echo "go cppflags $CGO_CPPFLAGS"
	echo "go cflags   $CGO_CFLAGS"
	echo "go cxxflags $CGO_CXXFLAGS"
	echo "go ldflags  $CGO_LDFLAGS"
	echo "go flags    $GOFLAGS"
	mkdir -p bin/
	go generate
	go build -o bin/noisetorch
	go clean -modcache
}

package() {
	cd NoiseTorch-${pkgver}
	install -D -m755 bin/noisetorch "${pkgdir}/usr/bin/noisetorch"
	sed -i 's/noisetorch.png/noisetorch/g' "assets/noisetorch.desktop"
	install -D -m644 assets/noisetorch.desktop \
		"${pkgdir}/usr/share/applications/noisetorch.desktop"
	install -D -m644 assets/icon/noisetorch.png \
		"${pkgdir}/usr/share/icons/hicolor/256x256/apps/noisetorch.png"
}
