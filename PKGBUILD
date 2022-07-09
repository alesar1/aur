# Maintainer: shulhan <ms@kilabit.info>

pkgname=google-cloud-ops-agent-git
pkgver=2.17.0.r15.g13708e7d
pkgrel=1

pkgdesc="Ops Agents that are part of the Google Cloud Operations product suite (specifically Cloud Logging and Cloud Monitoring)"
arch=(x86_64)
url='https://github.com/GoogleCloudPlatform/ops-agent'
license=('Apache License 2.0')
groups=()

depends=(
	'libyaml'
)
makedepends=(
	'cmake'
	'go'
	'git'
	'java-environment'
	'pkg-config'
	'rsync'
	'unzip'
	'zip'
)
optdepends=()

provides=('google-cloud-ops-agent')
conflicts=('stackdriver-collectd')

backup=()

source=(
	"$pkgname::git+https://github.com/GoogleCloudPlatform/ops-agent.git"
	"collectd::git+https://github.com/Stackdriver/collectd.git"
	"fluent-bit::git+https://github.com/fluent/fluent-bit.git"
	"opentelemetry-operations-collector::git+https://github.com/GoogleCloudPlatform/opentelemetry-operations-collector.git"
	"opentelemetry-java-contrib::git+https://github.com/open-telemetry/opentelemetry-java-contrib.git"
	"0001-apps-hostmetrics.patch"
)
md5sums=(
	'SKIP'
	'SKIP'
	'SKIP'
	'SKIP'
	'SKIP'
	'9a4dfd7fe6298c12c46ca50d7f473094'
)

pkgver() {
	cd "${pkgname}"
	git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
	cd "${pkgname}"
	git submodule init
	git config submodule."submodules/collectd".url \
		"${srcdir}/collectd"
	git config submodule."submodules/fluent-bit".url \
		"${srcdir}/fluent-bit"
	git config submodule."submodules/opentelemetry-operations-collector".url \
		"${srcdir}/opentelemetry-operations-collector"
	git config submodule."submodules/opentelemetry-java-contrib".url \
		"${srcdir}/opentelemetry-java-contrib"
	git submodule update
	git apply "${srcdir}/0001-apps-hostmetrics.patch"

	rm -rf ${srcdir}/google-cloud-ops-agent-git/submodules/opentelemetry-java-contrib/META-INF
}

build() {
	_destdir="$srcdir/../staging"
	mkdir -p "$_destdir"
	echo "destdir: $_destdir"

	cd "${pkgname}"
	BUILD_DISTRO=arch CODE_VERSION="${pkgver}" DESTDIR="$_destdir" \
		./build.sh
}

package() {
	_destdir="$srcdir/../staging"

	cd "${pkgname}"
	rsync -ar "${_destdir}/" "${pkgdir}/"
	rm -rf ${pkgdir}/lib
	chown -R root:root ${pkgdir}/
}
