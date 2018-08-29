# Maintainer: rilian-la-te <ria.freelander@gmail.com>

_opts=(
	-DCMAKE_INSTALL_PREFIX=/usr 
	-DCMAKE_INSTALL_LIBDIR=lib
	-DCMAKE_INSTALL_LIBEXECDIR=lib
)

makedepends=('cmake' 'vala' 'gtk3' 'vala-panel>=0.4.60' 'libwnck')
pkgname=(
'vala-panel-applets-xembed-git'
'vala-panel-applets-icontasks-git'
)
pkgbase=vala-panel-applets-gpl-git
_pkgbase=vala-panel-applets-gpl
_cmakename=cmake-vala
pkgver=r9.875f24f
pkgrel=1
pkgdesc="Cyclically spawns a script/program, captures its output and displays the resulting string in the panel"
url="https://gitlab.com/vala-panel-project/vala-panel-applets-gpl"
arch=('i686' 'x86_64')
license=('GPL')
source=("git+https://gitlab.com/vala-panel-project/${_pkgbase}.git"
        "git+https://gitlab.com/vala-panel-project/${_cmakename}.git")
sha256sums=('SKIP'
            'SKIP')

pkgver() {
  cd "${srcdir}/${_pkgbase}"
  ( set -o pipefail
    git describe --long --tags 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

prepare() {
  cd "${srcdir}/${_cmakename}"
  cp -r . "${srcdir}/${_pkgbase}/cmake"
}

build(){
	cd "${srcdir}/${_pkgbase}"
	cmake ./ "${_opts[@]}"
	make
}

package_vala-panel-applets-xembed-git(){
	pkgdesc="Old XEmbed system tray for vala-panel"
	depends=('gtk3' 'vala-panel>=0.4.60' 'libx11' 'libxrender')
	cd "${srcdir}/${_pkgbase}"
	make -C "xembed" DESTDIR="${pkgdir}" install
}

package_vala-panel-applets-icontasks-git(){
	pkgdesc="Budgie's icontasks for vala-panel"
	depends=('gtk3' 'vala-panel>=0.4.60' 'libwnck')
	cd "${srcdir}/${_pkgbase}"
	make -C "icontasks" DESTDIR="${pkgdir}" install
}


