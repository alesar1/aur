# Maintainer: Polarian <polarian@polarian.dev>
# Contributor: Benjamin Denhartog <ben@sudoforge.com>
# Contributor: Mansour Behabadi <mansour@oxplot.com>
# Contributor: Troy Engel <troyengel+arch@gmail.com>
# Contributor: Geoff Hill <geoff@geoffhill.org>
# Contributor: Sebastien Bariteau <numkem@numkem.org>
# Contributor: Justin Dray <justin@dray.be>

# For ISSUES, REQUESTS, and QUESTIONS:
# New: https://git.polarian.dev/AUR/google-cloud-cli
# Old: https://onedev.polarian.dev/polarrepo/google-cloud-cli
# Old: https://github.com/sudoforge/pkgbuilds

_extractedName="google-cloud-sdk"
pkgname="google-cloud-cli"
pkgver=434.0.0
pkgrel=1
pkgdesc="A set of command-line tools for the Google Cloud Platform. Includes gcloud (with beta and alpha commands), gsutil, and bq."
url="https://cloud.google.com/cli/"
license=("Apache")
arch=('any')
depends=('python')
optdepends=(
  "python2: for dev_appserver.py and endpointscfg support"
  "python-crcmod: [gsutil] verify the integrity of GCS object contents"
)
options=('!strip' 'staticlibs')
source=(
  "$pkgname-$pkgver.orig.tar.gz::https://dl.google.com/dl/cloudsdk/release/downloads/for_packagers/linux/${pkgname}_${pkgver}.orig.tar.gz"
  "google-cloud-cli.sh"
  "0001-set-python2-for-dev-appserver-py.patch"
  "0003-add-compdef-to-zsh-completion.patch"
)
conflicts=('google-cloud-sdk')
provides=('google-cloud-sdk')
sha256sums=('9be804d7ac69c121f8e618e84c4f09aeb9712e795cd0867dd445c861f575729d'
            'e03ffb8a534b175dc497621a0396bcc29884279daa519e2cb90bd98c61d6530a'
            '62ec7f56e09168d375823e9e99fcdcfbf40b0fffdd75f35cf91122c5902c82e9'
            '4694f5191ceea7cf8076861ce5790ba9e809023da278b0f6ed862b9611e5aa93')

prepare() {
  cd "${_extractedName}"

  for f in "${source[@]}"; do
    [[ "$f" =~ \.patch$ ]] && \
    ( \
      patch -p1 -i "${srcdir}/${f}" > /dev/null 2>&1 ||\
      ( \
        echo "failed to apply patch: $(basename ${f})" && \
        exit 1 \
      ) \
    )
  done
}

package() {
  mkdir "${pkgdir}/opt"
  cp -r "${_extractedName}" "${pkgdir}/opt/$pkgname"

  # The Google code uses a _TraceAction() method which spams the screen even
  # in "quiet" mode, we're throwing away output on purpose to keep it clean
  #  ref: lib/googlecloudsdk/core/platforms_install.py
  "${pkgdir}/opt/${pkgname}/install.sh" \
    --quiet \
    --usage-reporting false \
    --path-update false \
    --bash-completion false \
    > /dev/null

  rm -rf "${pkgdir}/opt/${pkgname}/.install/.backup"
  mkdir "${pkgdir}/opt/${pkgname}/.install/.backup"
  find $pkgdir -name '__pycache__' -type d -exec rm -rf {} +

  install -D -m 0755 "${srcdir}/${source[1]}" \
    "${pkgdir}/etc/profile.d/google-cloud-cli.sh"

  install -D -m 0644 "${pkgdir}/opt/${pkgname}/completion.bash.inc" \
    "${pkgdir}/etc/bash_completion.d/google-cloud-cli"

  install -D -m 0644 "${pkgdir}/opt/${pkgname}/completion.zsh.inc" \
    "${pkgdir}/usr/share/zsh/site-functions/_gcloud"

  mkdir -p "${pkgdir}/usr/share"
  mv -f "${pkgdir}/opt/${pkgname}/help/man" "${pkgdir}/usr/share/"
  chmod 0755 "${pkgdir}/usr/share/man"
  chmod 0755 "${pkgdir}/usr/share/man/man1"

  mkdir -p "${pkgdir}/usr/bin"
  for i in "${pkgdir}/opt/${pkgname}/bin"/*; do
    ln -st "${pkgdir}/usr/bin/" "${i#${pkgdir}}"
  done
  rm -f "${pkgdir}"/usr/bin/{bq,dev_appserver.py*,java_dev_appserver.sh}

  chmod -x "${pkgdir}"/usr/share/man/man1/*
  find "${pkgdir}/opt/${pkgname}" -name "*.html" -o -name "*.json" -exec chmod -x {} \;
  find "${pkgdir}/opt/${pkgname}" -name "*_test.py" -exec chmod +x {} \;
}
