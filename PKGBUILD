##
# Maintainer: pyamsoft <pyam.soft@gmail.com>
##

pkgname=pstate-frequency
pkgdesc="Easily control Intel p-state driver"
pkgver=1.2.12
pkgrel=1
arch=('i686' 'x86_64')
depends=('coreutils')
makedepends=()
optdepends=('x86_energy_perf_policy')
provides=('pstate-frequency')
conflicts=('pstate-frequency')
license=('GPLv2')
url="https://github.com/pyamsoft/pstate-frequency/archive/${pkgver}.tar.gz"
source=("${url}")
sha256sums=('dc80e0bc8f1c300533641e52f2516c9343c90d0b50c0bef30a6fb88bf7fb1637')

###############################################################################

##
# Please read config.mk for an explanation
# of the variable options in this file
##

##
# DEFAULTS
# _CXX="g++"
# _PREFIX="/usr/local"
# _INCLUDE_BASH_COMPLETION=1
# _INCLUDE_ZSH_COMPLETION=0
# _INCLUDE_UDEV_RULE=0
# _INCLUDE_SYSTEMD_UNIT=1
# _X86_ENERGY_PERF_POLICY=1
# _POWER_PLAN_AC=performance
# _POWER_PLAN_BAT=powersave
##

_CXX="g++"
_PREFIX="/usr"
_INCLUDE_BASH_COMPLETION=1
_INCLUDE_ZSH_COMPLETION=0
_INCLUDE_UDEV_RULE=0
_INCLUDE_SYSTEMD_UNIT=1
_INCLUDE_DOC=1
_INCLUDE_SRC=1
_X86_ENERGY_PERF_POLICY=1
_POWER_PLAN_AC=performance
_POWER_PLAN_BAT=powersave

prepare() {
	cd "$srcdir/${pkgname}-${pkgver}"
	make \
		DESTDIR="$pkgdir" \
		CXX="${_CXX}" \
		PREFIX="${_PREFIX}" \
		X86_ENERGY_PERF_POLICY=${_X86_ENERGY_PERF_POLICY} \
		INCLUDE_BASH_COMPLETION=${_INCLUDE_BASH_COMPLETION} \
		INCLUDE_ZSH_COMPLETION=${_INCLUDE_ZSH_COMPLETION} \
		INCLUDE_UDEV_RULE=${_INCLUDE_UDEV_RULE} \
		INCLUDE_SYSTEMD_UNIT=${_INCLUDE_SYSTEMD_UNIT} \
		INCLUDE_DOC=${_INCLUDE_DOC} \
		INCLUDE_SRC=${_INCLUDE_SRC} \
		POWER_PLAN_AC=${_POWER_PLAN_AC} \
		POWER_PLAN_BAT=${_POWER_PLAN_BAT} \
		options
}

build() {
	cd "$srcdir/${pkgname}-${pkgver}"
	make \
		DESTDIR="$pkgdir" \
		CXX="${_CXX}" \
		PREFIX="${_PREFIX}" \
		X86_ENERGY_PERF_POLICY=${_X86_ENERGY_PERF_POLICY} \
		INCLUDE_BASH_COMPLETION=${_INCLUDE_BASH_COMPLETION} \
		INCLUDE_ZSH_COMPLETION=${_INCLUDE_ZSH_COMPLETION} \
		INCLUDE_UDEV_RULE=${_INCLUDE_UDEV_RULE} \
		INCLUDE_SYSTEMD_UNIT=${_INCLUDE_SYSTEMD_UNIT} \
		INCLUDE_DOC=${_INCLUDE_DOC} \
		INCLUDE_SRC=${_INCLUDE_SRC} \
		POWER_PLAN_AC=${_POWER_PLAN_AC} \
		POWER_PLAN_BAT=${_POWER_PLAN_BAT}
}

package() {
	cd "$srcdir/${pkgname}-${pkgver}"
	make \
		DESTDIR="$pkgdir" \
		CXX="${_CXX}" \
		PREFIX="${_PREFIX}" \
		X86_ENERGY_PERF_POLICY=${_X86_ENERGY_PERF_POLICY} \
		INCLUDE_BASH_COMPLETION=${_INCLUDE_BASH_COMPLETION} \
		INCLUDE_ZSH_COMPLETION=${_INCLUDE_ZSH_COMPLETION} \
		INCLUDE_UDEV_RULE=${_INCLUDE_UDEV_RULE} \
		INCLUDE_SYSTEMD_UNIT=${_INCLUDE_SYSTEMD_UNIT} \
		INCLUDE_DOC=${_INCLUDE_DOC} \
		INCLUDE_SRC=${_INCLUDE_SRC} \
		POWER_PLAN_AC=${_POWER_PLAN_AC} \
		POWER_PLAN_BAT=${_POWER_PLAN_BAT} \
		install
}

