# Maintainer: Maximilian Stahlberg <maximilian.stahlberg tu-berlin de>
# Contributor: Alberto Santini <alberto.santini at upf dot edu>

# You need to manually download the IBM ILOG CPLEX Optimization Studio installer
# and place it into the same directory as this PKGBUILD, before you proceed.

# Note that CPLEX consistently refuses to run with recent Python versions and
# currently supports only versions 3.7 and 3.8. If you have one of those
# installed from the AUR, then the appropriate bindings will be installed.

pkgname='cplex'
pkgdesc="A commercial solver for mathematical optimization problems."
pkgver=20.10
pkgrel=2
arch=('x86_64')
url='https://www.ibm.com/software/products/de/ibmilogcpleoptistud'
license=('custom')
depends=('gcc-libs')
optdepends=(
	'python37: for Python 3.7 bindings'
	'python38: for Python 3.8 bindings'
)
options=('!strip')

_arch_upper=${arch^}
_basename="ILOG_COS_${pkgver}_LINUX_${_arch_upper/-/_}"
_installer="${_basename}.bin"
_archdir="${arch/_/-}_linux"
_pythonver=$(python --version | awk '{ print $2 }' | awk -F "." '{ print $1"."$2 }')

source=("local://${_installer}" installer.properties.template)

prepare() {
	chmod +x "${_installer}"

	cd "${srcdir}"

	# Installer can only work with absolute paths.
	sed "s,ROOT,${srcdir}/${_basename}," installer.properties.template > installer.properties

	# Extract source by running the installer.
	"./${_installer}" -f "${srcdir}/installer.properties"
}

package() {
	cd "${srcdir}/${_basename}"

	### Install binaries:

	# Cplex main exe.
	install -Dm755 "./cplex/bin/${_archdir}/cplex" "${pkgdir}/usr/bin/cplex"

	# Cplex AMPL.
	install -Dm755 "./cplex/bin/${_archdir}/cplexamp" "${pkgdir}/usr/bin/cplexamp"

	# Cplex Constraint Optimizer.
	install -Dm755 "./cpoptimizer/bin/${_archdir}/cpoptimizer" "${pkgdir}/usr/bin/cpoptimizer"

	### Install library files:
	install -dm755 "${pkgdir}/usr/lib"

	# Cplex libraries.
	install -m755  "./cplex/lib/${_archdir}/static_pic/"*.a "${pkgdir}/usr/lib"

	# Concert libraries.
	install -m755 "./concert/lib/${_archdir}/static_pic/"*.a "${pkgdir}/usr/lib"

	# Constraint Optimizer libraries.
	install -m755 "./cpoptimizer/lib/${_archdir}/static_pic/"*.a "${pkgdir}/usr/lib"

	### Install C/C++ headers:
	install -dm755 "${pkgdir}/usr/include"

	# Cplex headers.
	install -dm755 "${pkgdir}/usr/include/ilcplex"
	install -m644  "./cplex/include/ilcplex/"*.h "${pkgdir}/usr/include/ilcplex"

	# Concert headers.
	install -dm755 "${pkgdir}/usr/include/ilconcert"
	cp -R "./concert/include/ilconcert/"* "${pkgdir}/usr/include/ilconcert"
	chmod -R 644 "${pkgdir}/usr/include/ilconcert"
	
	# Constraint Optimizer headers.
	install -dm755 "${pkgdir}/usr/include/ilcp"
	install -m644 "./cpoptimizer/include/ilcp/"*.h "${pkgdir}/usr/include/ilcp"

	# Install Python bindings.
	if pacman -Qq python37 >/dev/null 2>&1; then
		cd "./cplex/python/3.7/${_archdir}/"
		python3.7 setup.py install --root="${pkgdir}/" --optimize=1
		cd "../../../../"
	fi
	if pacman -Qq python38 >/dev/null 2>&1; then
		cd "./cplex/python/3.8/${_archdir}/"
		python3.8 setup.py install --root="${pkgdir}/" --optimize=1
		cd "../../../../"
	fi

	# Install license.
	install -dm755 "${pkgdir}/usr/share/licenses/cplex"
	install -m644  "./license/"*.txt "${pkgdir}/usr/share/licenses/cplex/"

	# Install documentation and examples.
	install -dm755 "${pkgdir}/usr/share/doc/cplex/"{html,examples/{cplex,cpoptimizer}}
	cp -R ./doc/html/* "${pkgdir}/usr/share/doc/cplex/html"
	cp -R ./cplex/examples/{src,data} "${pkgdir}/usr/share/doc/cplex/examples/cplex"
	cp -R ./cpoptimizer/examples/{src,data,tutorial} "${pkgdir}/usr/share/doc/cplex/examples/cpoptimizer"
	chmod -R 644 "${pkgdir}/usr/share/doc/cplex"
}

md5sums=('b82c7a2751b91c3373435486815c267e'
         'f295f6c4ecd0f3a6d2fdca21788efd0f')
