# Maintainer: Darjan Krijan (daren) <${prename}_${surname}@gmx.de>
# Manual download of 'aocl-linux-aocc-${pkgver}.tar.gz' required from upstream
# Manual download of 'aocl-linux-gcc-${pkgver}.tar.gz'  required from upstream

pkgbase=aocl
pkgname=(aocl-aocc aocl-gcc)
pkgver=3.2.0
pkgrel=1
pkgdesc="AMD Optimizing CPU Libraries"
arch=('x86_64')
license=('custom')
url="https://developer.amd.com/amd-aocl/"
source=(
	"local://${pkgbase}-linux-aocc-${pkgver}.tar.gz"
	"local://${pkgbase}-linux-gcc-${pkgver}.tar.gz"
	"local://${pkgbase}-aocc.install"
	"local://${pkgbase}-gcc.install"
	"local://modulefile"
)
options=('staticlibs' '!strip')
optdepends=('env-modules')
sha256sums=(
	"1cd6376aa43b0cc7ff009776b56996b5f287165254be19cb081a9e8a4e6719ee"
	"9ff057919d8c5e3832054e66cb4393f79834a473d5c7c345521700e55104679b"
	"SKIP"
	"SKIP"
	"SKIP"
)

package_aocl-aocc() {
	install=${pkgname}.install

	aocl_prefix=/opt/${pkgname}
	prefix=${pkgdir}/${aocl_prefix}
	mkdir -p ${prefix}

	cd ${srcdir}/${pkgbase}-linux-aocc-${pkgver}

	#cp AOCL_User_Guide_${pkgver}.pdf ${prefix}

	# Option: set '-i ilp64' for ILP64 libraries as default
	./install.sh -t ${prefix} -i lp64

	# strip unneeded directories
	mv ${prefix}/${pkgver}/* ${prefix}
	rm -r ${prefix}/${pkgver}

	# fix amd-libs.cfg containing ${pkgdir}
	sed -e "s:=.*/opt:=/opt:g" -i ${prefix}/amd-libs.cfg

	# env-modules (optional)
	cp ${srcdir}/modulefile ${prefix}
	mkdir -p ${pkgdir}/etc/modules/modulefiles
	ln -s ${aocl_prefix}/modulefile ${pkgdir}/etc/modules/modulefiles/${pkgname}
}

package_aocl-gcc() {
	install=${pkgname}.install

	aocl_prefix=/opt/${pkgname}
	prefix=${pkgdir}/${aocl_prefix}
	mkdir -p ${prefix}

	cd ${srcdir}/${pkgbase}-linux-gcc-${pkgver}

	#cp AOCL_User_Guide_${pkgver}.pdf ${prefix}

	# Option: set '-i ilp64' for ILP64 libraries as default
	./install.sh -t ${prefix} -i lp64

	# strip unneeded directories
	mv ${prefix}/${pkgver}/* ${prefix}
	rm -r ${prefix}/${pkgver}

	# fix amd-libs.cfg containing ${pkgdir} and ${pkgver}
	sed -e "s:=.*/opt:=/opt:g" -e "s:/${pkgver}::g" -i ${prefix}/amd-libs.cfg

	# env-modules (optional)
	cp ${srcdir}/modulefile ${prefix}
	sed -e "s/aocl-aocc/aocl-gcc/g" \
		-e "s/conflict aocl-gcc/conflict aocl-aocc/g" \
		-i ${prefix}/modulefile
	mkdir -p ${pkgdir}/etc/modules/modulefiles
	ln -s ${aocl_prefix}/modulefile ${pkgdir}/etc/modules/modulefiles/${pkgname}
}

# vim:set ts=4
