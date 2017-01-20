# Maintainer: Christian Hesse <mail@eworm.de>

pkgbase=vis-standalone-git
pkgname=(vis-standalone-git vis-single-git)
pkgver=0.2.r693.g53f84f7
pkgrel=1
_pkgver_libmusl=1.1.16
_pkgver_ncurses=6.0
_pkgver_libtermkey=0.19
_pkgver_lua=5.3.3
_pkgver_lpeg=1.0.0
_pkgver_attr=2.4.47
_pkgver_acl=2.2.52
pkgdesc='modern, legacy free, simple yet efficient vim-like editor - statically linked - git checkout'
arch=('i686' 'x86_64')
url='http://www.brain-dump.org/projects/vis/'
makedepends=('git' 'libtermkey')
checkdepends=('vim')
conflicts=('vis')
provides=('vis')
license=('custom:ISC')
validpgpkeys=('836489290BB6B70F99FFDA0556BCDB593020450F'  # musl libc <musl@libc.org>
              'C52048C0C0748FEE227D47A2702353E0F7E48EDB'  # Thomas Dickey <dickey@invisible-island.net>
              '600CD204FBCEA418BD2CA74F154343260542DF34') # Brandon Philips
source=('git://github.com/martanne/vis.git'
        'git://github.com/martanne/vis-test.git'
        "http://www.musl-libc.org/releases/musl-${_pkgver_libmusl}.tar.gz"{,.asc}
        "http://ftp.gnu.org/gnu/ncurses/ncurses-${_pkgver_ncurses}.tar.gz"{,.sig}
        "http://www.leonerd.org.uk/code/libtermkey/libtermkey-${_pkgver_libtermkey}.tar.gz"
        "http://www.lua.org/ftp/lua-${_pkgver_lua}.tar.gz"
        "http://www.inf.puc-rio.br/~roberto/lpeg/lpeg-${_pkgver_lpeg}.tar.gz"
        "attr-${_pkgver_attr}.tar.gz::https://download.savannah.gnu.org/releases/attr/attr-${_pkgver_attr}.src.tar.gz"
        "attr-${_pkgver_attr}.tar.gz.sig::https://download.savannah.gnu.org/releases/attr/attr-${_pkgver_attr}.src.tar.gz.sig"
        "acl-${_pkgver_acl}.tar.gz::https://download.savannah.gnu.org/releases/acl/acl-${_pkgver_acl}.src.tar.gz"
        "acl-${_pkgver_acl}.tar.gz.sig::https://download.savannah.gnu.org/releases/acl/acl-${_pkgver_acl}.src.tar.gz.sig")
sha256sums=('SKIP'
            'SKIP'
            '937185a5e5d721050306cf106507a006c3f1f86d86cd550024ea7be909071011'
            'SKIP'
            'f551c24b30ce8bfb6e96d9f59b42fbea30fa3a6123384172f9e7284bcf647260'
            'SKIP'
            'c505aa4cb48c8fa59c526265576b97a19e6ebe7b7da20f4ecaae898b727b48b7'
            '5113c06884f7de453ce57702abaac1d618307f33f6789fa870e87a59d772aca2'
            '10190ae758a22a16415429a9eb70344cf29cbda738a6962a9f94a732340abf8e'
            '25772f653ac5b2e3ceeb89df50e4688891e21f723c460636548971652af0a859'
            'SKIP'
            '179074bb0580c06c4b4137be4c5a92a701583277967acdb5546043c7874e0d23'
            'SKIP')

prepare() {
	cd vis/

	git config --file=.gitmodules submodule.git.url ../vis-test/
	git submodule init
	git submodule update

	mkdir -p dependency/sources/

	for SOURCE in "${source[@]}"; do
		SOURCE="${SOURCE%::*}"
		SOURCE="$(basename ${SOURCE})"
		ln -s ../../../${SOURCE} dependency/sources/${SOURCE}
	done

	# standalone: work around borked dependencies in attr
	git cherry-pick -n a6d36cef54d7b89f7b7ec57e6c75c59fcc52f9b4
}

pkgver() {
	cd vis/

	if GITTAG="$(git describe --abbrev=0 --tags 2>/dev/null)"; then
		printf '%s.r%s.g%s' \
			"$(sed -e "s/^${pkgname%%-git}//" -e 's/^[-_/a-zA-Z]\+//' -e 's/[-_+]/./g' <<< ${GITTAG})" \
			"$(git rev-list --count ${GITTAG}..)" \
			"$(git log -1 --format='%h')"
	else
		printf '0.r%s.g%s' \
			"$(git rev-list --count master)" \
			"$(git log -1 --format='%h')"
	fi
}

build() {
	cd vis/

        # prepare test environment
        ./configure
        make -C test/core/
        make -C test/util/

	unset CFLAGS LDFLAGS

	make PREFIX='/usr/' single
}

check() {
	cd vis/

	make -C test/
}

package_vis-standalone-git() {
	pkgdesc='modern, legacy free, simple yet efficient vim-like editor - statically linked - git checkout'

	cd vis/

	make DESTDIR="${pkgdir}" PREFIX='/usr/' install
}

package_vis-single-git() {
	pkgdesc='modern, legacy free, simple yet efficient vim-like editor - statically linked, self-extracting - git checkout'

	cd vis/

	install -D -m0755 vis-single "${pkgdir}/usr/bin/vis"
}

