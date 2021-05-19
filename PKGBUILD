# Maintainer: Hugo Osvaldo Barrera <hugo@barrera.io>

pkgname=docker-rootless-extras
pkgver=20.10.5
pkgrel=1
pkgdesc="Extras to run docker as non-root."
arch=('x86_64' 'aarch64')
url="https://docs.docker.com/engine/security/rootless/"
license=('Apache')
depends=('docker' 'rootlesskit')
optdepends=('fuse-overlayfs: overlayfs support'
            'slirp4netns: faster network stack')
install=$pkgname.install
source=(
        "https://raw.githubusercontent.com/moby/moby/v${pkgver}/contrib/dockerd-rootless.sh"
        "docker.service"
        "docker.socket"
        "99-docker-rootless.conf")

sha256sums=('dc595e950c27b07320a46db60d47fc69c8acce1ee77ac43b773e7a08eaadffdb'
            '7c31c7f7755776bf9571e551ff4006035562e4394d88166809dd71b2ba847fc5'
            'd8695293e5d4a814763f13e1d36ed37273040666b4b91363d6c33171df8934c7'
            'd0d790d4c3d887b10b2b155b83a58a44980b9fa638f8c0f1faec0739dc0ef473')

package() {
  install -Dm755 "$srcdir/dockerd-rootless.sh" "$pkgdir/usr/bin/dockerd-rootless.sh"
  install -Dm644 "$srcdir/docker.service" "$pkgdir/usr/lib/systemd/user/docker.service"
  install -Dm644 "$srcdir/docker.socket" "$pkgdir/usr/lib/systemd/user/docker.socket"
  install -Dm644 "$srcdir/99-docker-rootless.conf" "$pkgdir/usr/lib/sysctl.d/99-docker-rootless.conf"
}
