# Maintainer: Filipe Nascimento <flipee at tuta dot io>

pkgname=velero
pkgver=1.5.2
pkgrel=2
pkgdesc="Backup and migrate Kubernetes applications and their persistent volumes"
arch=('x86_64' 'armv6h' 'armv7h' 'aarch64')
url="https://velero.io"
license=('Apache')
depends=('glibc' 'kubectl')
makedepends=('git' 'go')
source=("git+https://github.com/vmware-tanzu/velero#tag=v$pkgver"
        "build.patch")
sha256sums=('SKIP'
            '6a3a98867f35180ed604da9fa608c290107651b5ebba9409bcedd45c395cdda4')

prepare() {
    cd $pkgname
    patch -Np1 < ../build.patch
    sed -E 's#(OUTPUT_DIR)=\$\$\(pwd\)/_output/bin/\$\(GOOS\)/\$\(GOARCH\)#\1=.#g' -i Makefile
}

build() {
    cd $pkgname

    export CGO_CPPFLAGS="${CPPFLAGS}"
    export CGO_CFLAGS="${CFLAGS}"
    export CGO_CXXFLAGS="${CXXFLAGS}"
    export CGO_LDFLAGS="${LDFLAGS}"
    export GOFLAGS="-buildmode=pie -trimpath -mod=readonly -modcacherw"
    export GOLDFLAGS="-linkmode=external"

    make local GIT_TREE_STATE=clean VERSION=$pkgver

    ./velero completion bash | install -Dm644 /dev/stdin share/bash-completion/completions/velero
    ./velero completion zsh | install -Dm644 /dev/stdin share/zsh/site-functions/_velero
}

package() {
    cd $pkgname
    install -Dm755 $pkgname -t "$pkgdir/usr/bin"
    cp -r share/ "$pkgdir/usr"
}
