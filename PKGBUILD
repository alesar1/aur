# Maintainer: Tony Lambiris <tony@libpcap.net>

pkgname=albert-git
pkgver=0.17.6.r0.g77ab76d2
pkgrel=1
pkgdesc="A sophisticated standalone keyboard launcher."
arch=('any')
url="https://github.com/albertlauncher/albert"
license=('GPL')
provides=('albert')
conflicts=('albert')
depends=('qt5-charts' 'qt5-graphicaleffects' 'qt5-quickcontrols' 'qt5-svg' 'qt5-x11extras' 'libx11')
makedepends=('cmake' 'git' 'muparser' 'python' 'qt5-declarative' 'qt5-svg' 'virtualbox' 'virtualbox-sdk')
optdepends=('muparser: Calculator plugin'
            'python: Python extension'
            'virtualbox: VirtualBox plugin')
source=("albertlauncher/albert::git+https://github.com/albertlauncher/albert.git"
        "albertlauncher/plugins::git+https://github.com/albertlauncher/plugins.git"
        "albertlauncher/python::git+https://github.com/albertlauncher/python.git"
        "albertlauncher/pybind11::git+https://github.com/pybind/pybind11.git"
        "albertlauncher/xkcd-plugin::git+https://github.com/bergercookie/xkcd-albert-plugin.git"
        "albertlauncher/jetbrains-plugin::git+https://github.com/mqus/jetbrains-albert-plugin.git")
sha256sums=('SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP')

pkgver() {
	cd "${srcdir}/albert"

	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//g'
}

prepare() {
	mkdir -p build

	cd "${srcdir}/albert"
	git submodule init
	git config submodule.plugins.url "${srcdir}/plugins"
	git -c protocol.file.allow=always submodule update plugins

	cd "${srcdir}/albert/plugins"
	git submodule init
	git config submodule.python/pybind11.url "${srcdir}/pybind11"
	git config submodule.python/share/modules.url "${srcdir}/python"
	git -c protocol.file.allow=always submodule update python/pybind11 python/share/modules

	cd "${srcdir}/albert/plugins/python/share/modules"
	git submodule init
	git config submodule.jetbrains_projects.url "${srcdir}/jetbrains-plugin"
	git config submodule.xkcd.url "${srcdir}/xkcd-plugin"
	git -c protocol.file.allow=always submodule update --remote --merge jetbrains_projects xkcd
}

build() {
	cd "${srcdir}/build"

	cmake "${srcdir}/albert" \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-DCMAKE_INSTALL_LIBDIR=lib \
		-Wno-dev \
		-DBUILD_WIDGETBOXMODEL=ON \
		-DBUILD_QMLBOXMODEL=ON \
		-DBUILD_APPLICATIONS=ON \
		-DBUILD_CALCULATOR=ON \
		-DBUILD_CHROMEBOOKMARKS=ON \
		-DBUILD_EXTERNALEXTENSIONS=ON \
		-DBUILD_DEBUG=OFF \
		-DBUILD_FILES=ON \
		-DBUILD_FIREFOXBOOKMARKS=ON \
		-DBUILD_HASHGENERATOR=ON \
		-DBUILD_KVSTORE=ON \
		-DBUILD_MPRIS=ON \
		-DBUILD_PYTHON=ON \
		-DBUILD_SSH=ON \
		-DBUILD_SYSTEM=ON \
		-DBUILD_TEMPLATE=OFF \
		-DBUILD_TERMINAL=ON \
		-DBUILD_VIRTUALBOX=ON

	make
}

package() {
	cd "${srcdir}/build"

	make DESTDIR="${pkgdir}" install
}
