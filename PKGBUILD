# Maintainer: grufo <madmurphy333 AT gmail DOT com>
# Contributor: somepaulo <burafino AT gmail DOT com>
# Contributor: Massimo Branchini <max.bra.gtalk AT gmail DOT com>

_extname='desktop-icons'
_uuid="${_extname}@csoriano"

pkgname="gnome-shell-extension-${_extname}"
pkgver='19.10.2'
pkgrel=1
pkgdesc='Add icons to the desktop'
arch=('x86_64' 'i686')
url="https://extensions.gnome.org/extension/1465/${_extname}/"
license=('GPL3')
depends=('gnome-shell')
makedepends=('git' 'meson' 'glib2')
options=('!strip')
conflicts=("${pkgname}-git")
source=("https://gitlab.gnome.org/World/ShellExtensions/${_extname}/-/archive/${pkgver}/${_extname}-${pkgver}.tar.gz")
sha256sums=('486df38b724eab0d69f32e7246158f71e29c5e677af66a34e05eaf56b6331c3e')

package() {

	cd "${srcdir}"

	install -dm755 "${pkgdir}/usr/share/gnome-shell/extensions/${_uuid}"

	# taken from export-zip.sh
	local _repodir="${srcdir}/${_extname}-${pkgver}"
	local _build_dir="${_repodir}/builddir"
	local _local_prefix="${_repodir}/${_uuid}"
	local _extension_dir="${_local_prefix}/share/gnome-shell/extensions/${_uuid}"
	local _schemadir="${_local_prefix}/share/glib-2.0/schemas"

	meson --prefix="${_local_prefix}" --localedir=locale "${_build_dir}" "${_repodir}"
	ninja -C "${_build_dir}" install

	cd "${_local_prefix}"
	mkdir schemas
	cp "${_schemadir}"/*.xml schemas/
	glib-compile-schemas schemas/
	cp -r "${_extension_dir}"/* .

	cp -dpr --no-preserve=ownership {*.js,*.css,*.json,locale,schemas} "${pkgdir}/usr/share/gnome-shell/extensions/${_uuid}"

}

