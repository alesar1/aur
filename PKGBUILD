# Maintainer: Viktor Drobot (aka dviktor) linux776 [at] gmail [dot] com
# Contributor: frichtlm <frichtlm@gmail.com>

_cranname=broom
_cranver=0.7.0
pkgname=r-${_cranname,,}
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="Convert Statistical Analysis Objects into Tidy Tibbles"
arch=(any)
url="https://cran.r-project.org/package=${_cranname}"
license=(MIT)
depends=('r>=3.1' r-backports r-dplyr r-ellipsis 'r-generics>=0.0.2' r-glue r-purrr r-rlang r-stringr 'r-tibble>=3.0.0' r-tidyr)
optdepends=(r-aer r-akima r-auc r-bbmle r-betareg r-biglm r-bingroup r-btergm r-car r-caret r-coda r-covr r-drc r-e1071 r-emmeans r-epir r-ergm r-fixest r-gam r-gamlss r-gamlss.data r-gamlss.dist r-gee r-geepack r-ggplot2 r-glmnet r-glmnetutils r-gmm r-hmisc r-irlba r-joinerml r-kendall r-knitr r-ks r-lahman r-lavaan r-leaps r-lfe r-lm.beta r-lme4 r-lmodel2 r-lmtest r-lsmeans r-maps r-maptools r-mclogit r-mclust r-mediation r-metafor r-mfx r-mgcv r-modeldata r-modeltests r-muhaz r-multcomp r-network r-nnet r-orcutt r-ordinal r-plm r-polca r-psych r-quantreg r-rgeos r-rmarkdown r-robust r-robustbase r-rsample r-sandwich r-sp r-spdep r-spatialreg r-speedglm r-spelling r-statnet.common r-survey r-survival r-systemfit r-testthat r-tseries r-zoo)
source=("https://cran.r-project.org/src/contrib/${_cranname}_${_cranver}.tar.gz")
md5sums=('6d70e2deea3ff281c1d23bf9d2c5e4b3')

build() {
  cd "${srcdir}"

  R CMD INSTALL ${_cranname}_${_cranver}.tar.gz -l ${srcdir}
}

package() {
  cd "${srcdir}"

  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_cranname}" "${pkgdir}/usr/lib/R/library"
}
