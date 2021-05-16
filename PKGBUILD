# Maintainer:  Travis Collins <erbrecht at pobox dot com>
pkgname='noisetorch'
pkgver=0.10.1
pkgrel=4
pkgdesc='Real-time microphone noise suppression on Linux.'
arch=('x86_64')
url=https://github.com/lawl/NoiseTorch
license=('GPL3')
depends=('pulseaudio' 'polkit')
makedepends=('go' 'cmake')
provides=('noisetorch')
install="${pkgname}.install"
source=("${pkgver}-${pkgrel}.tar.gz::https://github.com/lawl/NoiseTorch/archive/${pkgver}.tar.gz"
        "${pkgname}.install"
        "main.patch"
        "version.go")
sha256sums=('72094ec448a19d30865434947f8518cc3510971d27f4f363d4ed22bbf8bb5685'
            '171a4179c7e0f3a018a314893e81e598c02cfee274c90d715a302660af920eba'
            'a1d53c1887ba05f7d7fdb70d275106a0cf39652d55a86c265c917eff00ec6cc9'
            '1f2f114638a818fe87ad10b9c7eab91f75f75f1d4e49c0a69f989f76a0d9d0a2')

prepare() {
	cd NoiseTorch-${pkgver}
	mkdir -p bin/
	patch -u main.go ../main.patch
	sed "s/VERSIONTOKEN/${pkgver}/" ../version.go > version.go
	export GOPATH="$srcdir/go"
}

build() {
	cd NoiseTorch-${pkgver}/c/ladspa
	make
	cd ${srcdir}/NoiseTorch-${pkgver}
	export CGO_CPPFLAGS="${CPPFLAGS}"
	export CGO_CFLAGS="${CFLAGS}"
	export CGO_CXXFLAGS="${CXXFLAGS}"
	export CGO_LDFLAGS="${LDFLAGS}"
	export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
	go generate
	go build -o bin/noisetorch
	go clean -modcache
}

package() {
	cd NoiseTorch-${pkgver}
	install -D -m755 bin/noisetorch "${pkgdir}/usr/bin/noisetorch"
	sed -i 's/noisetorch.png/noisetorch/g' "assets/noisetorch.desktop"
	install -D -m644 assets/noisetorch.desktop "${pkgdir}/usr/share/applications/noisetorch.desktop"
	install -D -m644 assets/icon/noisetorch.png "${pkgdir}/usr/share/icons/hicolor/256x256/apps/noisetorch.png"
}
