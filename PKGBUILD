# Maintainer:   Maximilian Weiss <$(echo "bWF4QG1heHdlaXNzLmlv" | base64 -d)>
# Contributor:  https://github.com/cri-o/cri-o/graphs/contributors


# Things that need to be updated on new build
pkgver=1.19.0
sha256sums_x86_64=(ac604ad74847a947019a946c89fceae3a4698476fae0df61d0757e031afaeee9)
pkgrel=1

# Things that will stay the same
pkgname=crio-bin
pkgdesc='Open Container Initiative-based implementation of Kubernetes Container Runtime Interface'
license=('Apache2')
url='https://cri-o.io/'
arch=('x86_64')
depends=(cni-plugins conntrack-tools)
makedepends=(tar gzip make sed coreutils)
provides=(crio crio-bin)
conflicts=(crio crio-bin crio-git)

# Using source and source_x86_64 is just a dumb hack so I can put the single sha hash up above
source=("https://raw.githubusercontent.com/cri-o/cri-o/580db0719d68b3ff3bb30f60397c3892be383eb5/LICENSE")
source_x86_64=("https://storage.googleapis.com/k8s-conform-cri-o/artifacts/crio-v${pkgver}.tar.gz")
sha256sums=(b40930bbcf80744c86c46a12bc9da056641d722716c378f5659b9e555ef833e1)

backup=("etc/crio/crio.conf"
        "etc/cni/net.d/10-crio-bridge.conf"
        "etc/containers/policy.json"
        "etc/crictl.yaml")

package() {
    cd "${srcdir}/crio-v${pkgver}"
    make DESDIR="${pkgdir}" PREFIX="${pkgdir}/usr" ETCDIR="${pkgdir}/etc" OPT_CNI_BIN_DIR="${pkgdir}/usr/lib/cni"
    rm -rf "${pkgdir}/usr/lib/cni/"
    sed -i --follow-symlinks -re 's|/usr/local|/usr|g' "${pkgdir}/usr/lib/systemd/system/"*.service
    sed -i --follow-symlinks -re 's|/opt/cni/bin|/usr/lib/cni|g' "${pkgdir}/etc/crio/crio.conf"
    install -Dm644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/crio/LICENSE"
}

