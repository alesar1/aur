# Maintainer: Thomas Quillan <tjquillan@gmail.com>

pkgname=devcontainer-cli
_npm_namespace="@devcontainers"
_npm_name="cli"
pkgver=0.5.1
pkgrel=1
pkgdesc="Dev container CLI, which can take a devcontainer.json and create and configure a dev container from it."
arch=("any")
url="https://github.com/devcontainers/cli"
license=("MIT")
depends=("nodejs")
makedepends=("npm" "jq")
optdepends=()
source=("https://registry.npmjs.org/${_npm_namespace}/${_npm_name}/-/${_npm_name}-${pkgver}.tgz")
sha256sums=('2e89f0790c727e0055fe1c5a8a4d9b2be1a2b895a5be33400151426d8e50b556')
noextract=("${_npm_name}-${pkgver}.tgz")

package() {
	npm install -g --cache "${srcdir}/npm-cache" --prefix "${pkgdir}/usr" "${srcdir}/${_npm_name}-${pkgver}.tgz"

	# npm gives ownership of ALL FILES to build user
	# https://bugs.archlinux.org/task/63396
	chown -R root:root "${pkgdir}"

	# Remove references to $pkgdir
	find "${pkgdir}" -type f -name package.json -print0 | xargs -0 sed -i "/_where/d"

	# Remove references to $srcdir
	local tmppackage="$(mktemp)"
	local pkgjson="${pkgdir}/usr/lib/node_modules/${_npm_namespace}/${_npm_name}/package.json"
	jq '.|=with_entries(select(.key|test("_.+")|not))' "${pkgjson}" > "${tmppackage}"
	mv "${tmppackage}" "${pkgjson}"
	chmod 644 "${pkgjson}"
}
