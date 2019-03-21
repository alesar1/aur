# Maintainer: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

pkgname=nomad
pkgver=0.8.7
pkgrel=2
pkgdesc="A Distributed, Highly Available, Datacenter-Aware Scheduler"
arch=('i686' 'x86_64')
url="https://www.nomadproject.io/"
license=('MPL')
depends=('ethtool' 'lxc')
makedepends=('go' 'git')
optdepends=(
	'docker'
	'rkt'
	'java-runtime-headless'
)
backup=(etc/nomad/{server,client}.conf)
source=(https://github.com/hashicorp/nomad/archive/v$pkgver/$pkgname-$pkgver.tar.gz
        nomad-{server,client}.{service,conf}
        lxc-version-check.patch
		golang-crypto.patch
		container.patch)
sha256sums=('f74eac627de69190e586358b1956573a0ae1a40d0755ecdee163016949f9c7fe'
            '52b0a22c3c0c72c642a8728cb48bd8797f4f6a12990e11bbb2342edcc2a9a206'
            'da475bc4aa3b1493eb62f09e7f99dcc171e8ce6d74df3da30514cfdfe72a5714'
            '4c8fb7c18c67ca20e3ee07f25cf2f0c82b66c4c173275ae8d643c91cce3c0ceb'
            'ba80943ac42e617627c7e14be402078199ddba8d7e4276d67f0c9f6e6842d4a8'
            '740cf838f4489b00fab8329c81ba21b1fae02e584d8fac2b5f88eeec76e4e62f'
            '75583a195b43d7345449bbac60359bf54661ccbd699386a6e59bb483c6054338'
            'd7f483250456cb7b92a437661999786b7295628fc09e1a3b0769606902d82ef0')

prepare() {
	mkdir -p src/github.com/hashicorp
	cd src/github.com/hashicorp
	rm -rf nomad
	mv ../../../$pkgname-$pkgver nomad
	cd nomad

	export GOPATH="$srcdir"
	export PATH="$GOPATH/bin:$PATH"

	if [ $CARCH == "x86_64" ]; then
		export GOARCH=amd64
	else
		export GOARCH=386
	fi

	go get golang.org/x/sys/cpu

	make bootstrap
	mkdir -p bin

	pushd vendor/gopkg.in/lxc/go-lxc.v2
	patch -p1 -i "$srcdir"/lxc-version-check.patch
	popd

	pushd vendor/golang.org/x/crypto
	patch -p1 -i "$srcdir"/golang-crypto.patch
	popd

	pushd vendor/gopkg.in/lxc/go-lxc.v2
	patch -p0 -i "$srcdir"/container.patch
}

build() {
	cd src/github.com/hashicorp/nomad
	export GOPATH="$srcdir"
	export PATH="$GOPATH/bin:$PATH"

	if [ $CARCH == "x86_64" ]; then
		export GOARCH=amd64
	else
		export GOARCH=386
	fi

	CGO_ENABLED=1 \
		go build -ldflags '-X main.GitCommit=""' \
		         -tags "ui lxc" \
		         -o bin/nomad
}

package() {
	for type in server client; do
		install -Dm644 nomad-$type.service \
			"$pkgdir"/usr/lib/systemd/system/nomad-$type.service
		install -Dm644 nomad-$type.conf "$pkgdir"/etc/nomad/$type.conf
	done

	cd src/github.com/hashicorp/nomad
	install -Dm755 bin/nomad "$pkgdir"/usr/bin/nomad
	install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
