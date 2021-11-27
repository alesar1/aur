# Maintainer: Andrea Manenti <andrea [dot] manenti [at] yahoo [dot] com>

pkgname=sdpb-git
pkgver=1512.80746b8
pkgrel=1
pkgdesc="Semidefinite program solver designed for the conformal bootstrap"
arch=(x86_64)
license=('MIT')
url="https://arxiv.org/abs/1909.09745"
depends=('boost' 'libxml2' 'rapidjson' 'elemental-gmp-git')
optdepends=('openmpi')
makedepends=('git' 'python')
source=('git+https://github.com/davidsd/sdpb.git')

pkgver() {
        cd "$srcdir"/sdpb
        echo `git rev-list --count master`.`git rev-parse --short master`
}

build () {
        cd "$srcdir"/sdpb

        python waf configure --elemental-dir="$pkgdir"/usr
        python waf
}

package() {
        cd "$srcdir"/sdpb/build

        for bin_name in sdp2functions spectrum pvm2functions sdp2input sdpb approx_objective outer_limits pvm2sdp
        do
            install -vDm 755 "$bin_name" "$pkgdir"/usr/bin/"$bin_name"
        done
}

sha256sums=('SKIP')
