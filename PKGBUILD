# Maintainer: Michael William Le Nguyen <michael at mail dot ttp dot codes>
# Maintainer: Buildpacks Maintainers <cncf-buildpacks-maintainers at lists dot cncf dot io>
pkgname=pack-cli-bin
pkgver=0.24.1
pkgrel=1
pkgdesc="CLI for building apps using Cloud Native Buildpacks"
arch=('x86_64')
url="https://buildpacks.io/"
license=('Apache')
provides=('pack-cli')
conflicts=('pack-cli')
source=("https://github.com/buildpacks/pack/releases/download/v0.24.1/pack-v0.24.1-linux.tgz")
sha512sums=("98c6f65b2f7c6c0f69bb32567a3ca31d90cea83fb6380a83aec97c81c07f60edf89e9c1f4a15802244271fde4cd70a84bf5805ab37ba0c7b8cc2454f7505c822")
package() {
	install -D -m755 "${srcdir}/pack" "${pkgdir}/usr/bin/pack"
}