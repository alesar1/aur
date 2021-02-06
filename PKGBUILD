# Maintainer: Ashar Khan <ashar786khan at gmail.com>

pkgname=cpeditor-git
_pkgname=cpeditor
pkgver=6.7.1.r78.g97548b75
pkgrel=1
pkgdesc='The editor for competitive programming'
arch=('x86_64')
url='https://github.com/cpeditor/cpeditor'
license=('GPL3')
depends=('qt5-base>=5.15.0')
makedepends=(
	"cmake"
	"git"
	"ninja"
	"python3"
	"qt5-tools"
)
optdepends=(
	'cf-tool: submit to Codeforces support'
	'clang: C++ format and language server support'
	'jdk-openjdk: compile Java support'
	'jre-openjdk: execute Java support'
	'python: execute Python support'
)
provides=('cpeditor')
conflicts=("cpeditor")

source=('git://github.com/cpeditor/cpeditor.git'
	'git://github.com/cpeditor/QCodeEditor.git'
	'git://github.com/cpeditor/QtFindReplaceDialog.git'
	'git://github.com/cpeditor/lsp-cpp.git'
	'git://github.com/itay-grudev/singleapplication.git'
	'git://github.com/MikeMirzayanov/testlib.git'
	'git://github.com/cpeditor/qhttp.git')

md5sums=('SKIP' 'SKIP' 'SKIP' 'SKIP' 'SKIP' 'SKIP' 'SKIP')

pkgver() {
	cd "$_pkgname"
	git describe --long --tags --abbrev=8 | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
	cd "$_pkgname"
	git submodule init

	git config submodule.third_party/QCodeEditor.url "$srcdir/QCodeEditor"
	git config submodule.third_party/QtFindReplaceDialog.url "$srcdir/QtFindReplaceDialog"
	git config submodule.third_party/lsp-cpp.url "$srcdir/lsp-cpp"
	git config submodule.third_party/singleapplication.url "$srcdir/singleapplication"
	git config submodule.third_party/testlib.url "$srcdir/testlib"
	git config submodule.third_party/qhttp.url "$srcdir/qhttp"

	git submodule update
}

build() {
	cd "$_pkgname"
	cmake -Bbuild -DCMAKE_INSTALL_PREFIX=/usr -DPORTABLE_VERSION=Off -DCMAKE_BUILD_TYPE=Release -GNinja
	cmake --build build -j$(nproc)
}

package() {
	cd "$_pkgname/build"
	DESTDIR="$pkgdir/" ninja install
}
