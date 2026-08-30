"use client";

import { motion } from "framer-motion";

const Companies = () => {
  return (
    <main
      className="bg-black roboto flex flex-col gap-10 py-10
    items-center"
    >
      <p className="text-white text-[17px]">
        Thousands of world’s leading companies trust Space
      </p>
      <motion.article
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-30"
      >
        <svg
          width="84"
          height="26"
          viewBox="0 0 84 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="84" height="26" fill="url(#pattern0_2_3737)" />
          <defs>
            <pattern
              id="pattern0_2_3737"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_2_3737"
                transform="scale(0.0119048 0.0384615)"
              />
            </pattern>
            <image
              id="image0_2_3737"
              width="84"
              height="26"
              preserveAspectRatio="none"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAaCAYAAAApOXvdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARoSURBVHgB3VnvdeIwDBd9/X7pBHUnKDdB0wmuG5BOUDoBMAEwAXSCwgRJJ4CbgNwEsIHPaqRGEY75W2j7e8+PxLJsWVYkWTSAYK2N3M+Ta4lrEbWVaxPXeo1GIwcBNx7HNul16lom+JFv7tqz41u5sYZoD4K2NifNK8ca6s5p/k1y1OHN8Y0VX0zrNMUaL55xqIe+6HqGQjd94n3XkePrSaama0sbRkstlAraSL0zZqgg1xYe2oKElXO2bBgoYzMgRx1SxdMJjB2psUbRE+vfz0gy6AEzTx9uJqrZSOgwQrR2QPAlrbFQ/ekhCrXrylzadRn7AbkWth5NZEjWOsvJxgFaqmh4CF3XXj0L1dFGYr6BrQptAmtFasOxaLgfrSBDYyNbVcgrz6XWlzxaoe9yW7+lJvy5D2jyrjp9rew4sEkptNzQUtEqgon5HoQcbSVHV/FdQw1osxLdLffT9PFZj4UKnljzXDpnigFCb8BA4XDvYDvkHCwoCKGjZiuaKxo+Gz2Bo2HwmwgZIhqHctzCFrBFgEqUXF3xroPXXKw/d/ySVrf3qY+fcSmESdxPixaN4DDk4FHaNiDr/LOrHGQEXdGFh3qvhlUOBg9Y0XMo5TbgRy751SEUCqVPL1HCsPZj2B0GdgRZJAaPpkeOCDanRilUD8Cblu0AU9O/CvDABVlmIvqGrt04YfB0X+B04LyOgQq5IjmmIUa3hw5UFTB2fAPP0KAyDhj7gQsoktuPSZwgbc+ncAok4jlTvq/206/51Ic1w/8pXh3cjHiewx5AhepPTOIusODRYEWKRMjVuw5KN+I5VTRU/oyibkqR3RBNK+leyKBdyl/YA6hQqURjyxQnhqrVIFpwGjwIOfALisEjB8loAvMgHeMDKx2zCLnfJ1vmtB3FO4A9gArVp7agXCv1jI9l7nYsUPCQcrCVoRy+jSUeiwrB0DqozJ7oxzlwv0soageMvQMaKvQR1j8xwxNDUQyQC2XwOUA5pPVwHroiGdgv4vsj5c+MjPhvRLsnvkwuQsGqp9aRPnqo/PdOwMQ+dyeEi7eh8FUoMDrvCSuPcq2VqsTgBt/oOVfzDqH0e9oXYebAwYD5ObH+DUWAuSY5kHfM1kIXhgkrE+VzfVc1QRR5MtcG2ppRYa4PaQnJGdHYF4/BaKvOPHv9xbQG/ACQG8LLgIHSqhFr5bgvBbrvLih3PTvonp1SRF+SbLowsvVt6yywRRFjQRuJ4czwpFyVggZ8B9hqDfVLWCxVftA3Rrasas3gO8FWy2qo2NEprZYOtmOLeivLENmyrLZXLnlWWH/FH9+xrrlrvrhprYhcTt+z5sCWxeIR9Rk4MY4W5emz10UKBleNsGFKllNfznTxZx6Cc1D8vYWyLuqbO4MiL82FLHghmGJdAr47yCpT+7lYkkXGNevP7FeP7rvCFq6gbUv/dgwlshuJNqx7NmWeJLG35V8qMZQ3k5BvZXeALgJvS/NPvPIeFWe9KZElVazpwCr72fEfPNAgZp+/mQoAAAAASUVORK5CYII="
            />
          </defs>
        </svg>
        <svg
          width="83"
          height="20"
          viewBox="0 0 83 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="83" height="20" fill="url(#pattern0_2_3738)" />
          <defs>
            <pattern
              id="pattern0_2_3738"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_2_3738"
                transform="scale(0.0120482 0.05)"
              />
            </pattern>
            <image
              id="image0_2_3738"
              width="83"
              height="20"
              preserveAspectRatio="none"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAAUCAYAAADx7wHUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL5SURBVHgB5VjdcdswDIZ1fa83qDaoNyi9QT1B1QniTiB5AtsT2Jkg6QRSJog7gZQJkkzAAjaVUBB/LSkv+e5wEkkQAEGQBAnwiSGlPMrxkH1xKFrg54bXz2az3+A3MsdPqlXtsd8poB/X+YD9jqptjp8t+PGEdMJ+9z5G5MlQLv3+gimBSg6WGRABfUvWp0ZKPX1SpGfW78DaY0CytmoSfPaOEaGZa2A2lAHGlYZ+tW1gSl9t6DPEmbreNMDmoQ61LnPh0Cuwo8AlUkEcUqQ7pCUbxFzVpxCPNdKrJp/oB3Rl0X+JepZoc2MTNMaStzkzZ+UGugaSwgriQROxRcP/aHUUfQu4Dvco64lXoo4CumNIlZ6lS5hyKO21vq3hACGgqDMsk4UhrOcOGaV0I1d8uYfPt8y/OWzYGfidk0ZjkmFbgglZYuDlYV6pk7hi9WsIxwsrF6iclnbh4RuCwiBP2JhVcNB5kMKVSJjAFD8Z49mr74bV38iAk1KTUbG6n6x8i/QXRgIGwItBpzDxao68drs5I/Eoa9r8UB04+kyTARmEYwWXvdcE0hET6aF4ZeWvnGEsRxK4M/nBw6Nxz8q9pN4GFSl0ADSsicor1f6hGNORhEQTLKC/X1SsvGPlVAYk8S1UakIR2jru7GBXyjIQ31n5LVLHdiRBj0xTflXrxxWWnw08OURAbRttarSaypFq/+eO0q+YCxjRkYREU5zBdRAx0Umg+/bsggomgHy/CHBUMCHayBQwDNM+FERATaxp+W4CV8GdvOTWJmrHeesyoLYlyxb+tSFpnWvtJWsrIACyfz/2Je2lRo+y/1DS4tGgS8g4FB5bs0SaD569e9hwhH5CPEVq44PQiCLRlPfSWJYwDBTVhV5BV09gEUrLnC/Rk+/tUaUxPNRjkvipQfadnYi2rgemXT1HtuAOpYeOB0UtnI7UsDPwkjPJ8A10nR0q8wjdQ6LR/kmu72Ga+JsRMwSrI1tor00wg08KeclgXGndP3TUDiLk/Qcs6HKlF6kfrgAAAABJRU5ErkJggg=="
            />
          </defs>
        </svg>
        <svg
          width="74"
          height="42"
          viewBox="0 0 74 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="74" height="42" fill="url(#pattern0_2_3739)" />
          <defs>
            <pattern
              id="pattern0_2_3739"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_2_3739"
                transform="scale(0.0135135 0.0238095)"
              />
            </pattern>
            <image
              id="image0_2_3739"
              width="74"
              height="42"
              preserveAspectRatio="none"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAAAqCAYAAAAUJM0rAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN3SURBVHgB7ZrdcdswDIDhXt+rDaJO0GxQblBt0HSCegN7g7gTOJ0gyQRyJ0gygdwJkk6AEjVUIzT4I5mOci2/O5x1JglCMAmCpAEKLwsinltZWqlhImzfhm2o4DVChll5xB0tTAD9QLhnBZl5A3moWIgapqEWzx8gM7kc9c9THJVIcVQiyY6iIG3ljlY3GIFt99VKZ2UBI+Bg3bLUMALqm99hDqfAKm7EirJWyuWK03l03Ik6g5dvXvZ75kq5EeWtUl7FbAyROqJy5CVSxzs4jjH2HPUOJUYl8sdRPHWuaVrhRFmtsOESJoKn77UWR9/y54WVhp8frGTPbBO47G2whn6fzWb38PKQDbRYUUz+Zm146gu0qTfVPqnyPE9lw7M4WmJUIsVRifSO2ojvtNhwI54fYBzb/tPO/Z9K+Q/+fBJ1JRtFVzK2z61o54t/fbnPxr8R35t186pkAmXRZI4T1ypQbhLKTaDMm3AKO2M2NCdb+VMddUpSHHUMWWKUM6w3MA1yOo0ND6eHR9WoDXNmGxooFAqF/4zZkMqcw3yC/Y3H1sqtXfU2og7lIP3B2pMtWyl6qM4F7G5LatZDCd5KbkQT2tDqdqW1cer3edGtlQ2v0vnB/TGsRqvU9eZUXN55dBlP/3SM/Ohpc6bUN4E+iFHH0UEiLzbGUa3TvhP6jVJ/gWHO4NBJKeR1Fu4O8545xsoFGzRH5ww9wVGSRnxPZ9pVQBdBo2qJu20GyZXiqM6pv2J753j4gxvI5KTKURw90As5StG3wPC+ay11YeT2hR0iOVds64a8TxJ4OIzrhDZDpx7yd0apK29uoldMuBs9PTeeOvOQfT5ie71aPG8zrRZf4PCYxFghZ312vpejTV0NA/V9RymjjphjjpLG1Zjh+IGcbeU97Bzm/uqhqVDDMD4m6Elxfhx8/nceInpDggOPXPAwYJ+JMjmVHjEeoxpHl1H66kT5GnLhGIscN2ieU+BcoBMQMR6jjByZystVTl1JJ/qmz9ZxbIWHK9ta2OrmYjVkdJTWuWRoHhVCu65fRtq46cE5+pNTyVLpq2YZF2JwfzmpkctRLXp+YQw7S8vMyVmdpz45ce7ph0Ywjb7G1Ttmr0dJYn/n9cvKzZC9HhtZh3R4+qY2BvZBmtpttb2kaNNwm74v795Q9AFs372vXqFQKLw2fgNGGakcOqNDkQAAAABJRU5ErkJggg=="
            />
          </defs>
        </svg>
        <svg
          width="122"
          height="24"
          viewBox="0 0 122 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="122" height="24" fill="url(#pattern0_2_3740)" />
          <defs>
            <pattern
              id="pattern0_2_3740"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_2_3740"
                transform="scale(0.00819672 0.0416667)"
              />
            </pattern>
            <image
              id="image0_2_3740"
              width="122"
              height="24"
              preserveAspectRatio="none"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAAYCAYAAAA1Zem1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARoSURBVHgB7VqLUeMwEBXMFZAOEB2kg3MHpINzB9BBfBUQKrA7CFeB6cB04HSQXAV7El4lm/WuJOfCDGHyZnQ+pLc/rf5gjAAAmLny5ErryhYO6Fx5dsWaKy4bLomPLLkaaj8gzJngdM1dWePgujNXfB5wtk5Bf67ZjQkOuCb6s3BCkmmy/3tmXxP9ubj1/7iOLd3nyZwG60ptrvjS+IGzcam071x5cWXjiuc9uFIIvIXTU9zc3LyZDKBNX3ZOZmcmwMnOUfZdkvV+mGHw7ZCzMZk41S+Us0T2PcFd4I+n+GjRzob7SPwwIx/8bFaW5E5akmE4jUtoTdrJR9TLl/5SWrrdtyJ1S+RSORuCh2HrkQ6RNQjniIT9UL+EyLYEw+2kFux+yArcqT6WjNNKcoru/sgHQRhQwEYCbEDGLNIhLeRDSjRHiZw5pG8JPY8H8jGSRXkLxwNPwivhdgmuj2ERSXRMLqZ7GZRtNQcjiS4UpQuF3zLeCoYktooeLdGeX2KxMO7sLer27Xwwet6M+CRhjTbXMVmU7wXfaiLr2y1ya4FboY9czzyR6Bb0fmvRVs/q77SAo4crGDpYQilwqbNbGgi2S1uBlOha0E1lexjP2gKOB3JF2oDJzoUYe0WWx1QIslbgHukhXDoje8WOx4K0VZpe1EnjLk9N9FyRKwVuG2tHDk+2lGhJN+0gq+imOrakHjL8KhTZLiVLuOtUv8KwtdHELLC+lOxjG59sfKCuSFslLUEfSiF+CKlBRiFwRUcFHg00N9EBrxG9M0V3rl8d70wasEmA2S4iPJqYGutoojtBBnhcpI1Onsrfo/8Idn2SnxSHfrlPKbUlrlep68q7mQA4nsGqLF5BNqTqnlE2Jg7qtx80Ux+HKL+P8GgM1sT9iNWJbT7R2mxYYlL3wBHdKPwmYTDVSdZMALt7/kzQZ4I/e7ug3xas+9AlMdzdd4RTmDiovXuT56OETUJ3FLc4C9+U9iYkG5Mcuyv/VurDSFUfZnBZtmY63vBbANujiO5HonsjPGaofmH9jMiGjn1hnBiovYcI79HE8Veoy030wIPxKY3C75Opu2qlWYDxyZE/JCwE3bl7ND91l6TNryBLppe2c9Rw2IN9fzxHZPm+7w9clrT5gRcOVAWPH8i2A4dHF4pW6LtKiL8l7bE9uqQNUjJzktyYBGB879vC+HfdwJ2GRKKR0wm6+5SfMA2VYLcSeDye5wi3Bf2h4xyJ1vsOjpPqR0Rspns0JgMwjNrY680W0qdu7TGG33clrAS5XFSRuFYJ2f0LI8Rf+TjOnehCcv7jDwDw/33EmcZMBBzelENSe3TIgv7W7bmpe/0MuT3R4eXWoByWCK9Hv9bEr7DiFJkxSauKHwSWcX2cDYzf7MPK2QbbRHdAJdhueZ+RthWJw2rOW9Bfvzwa80WBSbcZvH1HmzMg2M2x/eUAGXvdpeLcib5owPgg1phvgmuiGTDZ/XdKsgdJdGeuGHCR+04CeEhZfcfYJPwDN05vKNRvwlYAAAAASUVORK5CYII="
            />
          </defs>
        </svg>

        <svg
          width="82"
          height="25"
          viewBox="0 0 82 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="82" height="25" fill="url(#pattern0_2_3741)" />
          <defs>
            <pattern
              id="pattern0_2_3741"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_2_3741"
                transform="scale(0.0121951 0.04)"
              />
            </pattern>
            <image
              id="image0_2_3741"
              width="82"
              height="25"
              preserveAspectRatio="none"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAAZCAYAAACis3k0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN4SURBVHgB7Vj/ddpADBZ9/b/eIJcJygZxJgidIHSCJBPgTFAyAWSCkAlMJoBOYDaATnCVsEx04n7YpC+hLd9792zfSSfps33SXc9aOwFGr9f7Du8MtN/HyxO2DNsYfbiHIwD6NcbLF368Q782KYUd4AOAZkvrIuP+DFvOrQ/vDLRZCZ/OUvKf4HgxwFZyu4EjxzEQeYdthY1+nfQvdKT4DB8MJG6Jl3P4yxElEtcGg5drqH+zjLsp8GckYBrRI9kbj95PJTrl8UEjg/POUL/A+69Crs99UxxfCRtDbFfYDMvR2CO2eSMX8S3XeomYhlBzYUQ8dzs7oWSDjzfY1jaMBROtDV4n9CQokQzF80T7pOV53Fg3GWhUAd/6Cd92etad/ymicxsk0tYktkFlOcuy3sB2Q2ci7T6JRAy91NLGfTO23QsuPUSmYPaI9BgkJ3MxVqhJCuFsZd1AKPCM262a96n5ZUTfRNi5Ff0z7qN5Jso3TdaihW/bmHg+GRPJmACRhYhlqGIZ+4iUAVTSUeGUlFl7CNk5pPRy5dyZ9RAZIThT+j4bxuNb3iKmvpzPukQWHnn5QZW+ZHMl7u995Qj2jVF5BHWioOCoYJZFs3exx745yi6F7CV0g7RBfk1sfB9BvlExnYu+h0BMy8g8s0DfiO9NqvxZJcaawDJ4zc6El5Z6XWHEPdnLW+icK71D6tS1p8/5qn1ESkMU8Bz8MEpH64Wgv6oM2kOTMIc0SGclnrvYaw+54PBz0WKtG0kZ7pMZex3Q09UArWdvWSPzQEx99fzWNfLMI+/M6SMys25Gqjgow+2HCqYQelVEb6T0JiHCEv2lsiGDz4SdkQpc6+VKZ23DWbs7kSwks3IMVWTyqJ5wuCuR9FJ0PbiwbtnTYKi+uEPryCSR3kMLysp4SZ0LzkFlXcrKePkG6SR1GdrCpcB6l8qGrhoID3LLx1lZ6/l8O+hMlpLN1DeAhgtkmsZoC3QB7p75gUnz6VHxTDJD1jPCyWeo98sb5fyU719a9G9JQRtEygDcvTawjZnPP6GXg7tvXkF9fjBW8zQHu79gHyvh36YHfwjoIB0ENF/FY4ho/t0uUnL/LejrFWvGOCIn154BnOBCJYfW5Q+c4MKGy59tfWYD5c8JHtgDyp8TArD1DqeKkLg4kdgS9nXrVzKp1OiU+Z9NLr8BKaJOHlCE1f4AAAAASUVORK5CYII="
            />
          </defs>
        </svg>

        <svg
          width="99"
          height="30"
          viewBox="0 0 99 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="99" height="30" fill="url(#pattern0_2_3742)" />
          <defs>
            <pattern
              id="pattern0_2_3742"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_2_3742"
                transform="scale(0.010101 0.0333333)"
              />
            </pattern>
            <image
              id="image0_2_3742"
              width="99"
              height="30"
              preserveAspectRatio="none"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAAAeCAYAAAA4h6CKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASXSURBVHgB7VrhdeM2DKb77n/VCaLbQJ2g6gT1BscNqk5gdQK7E8g3QdoJ5A3sTkDfBM5NgAMiMIZhkpIcOXd5T997eJZIEAQBCASZLMwAAECGP0uk35BKpIyJcGQ6IP23WCx2Zsb0QCfkSGukEwyHQ7JmxnRAg/450gkhp+Rmxu2glITUwjQgZ34yM8aDHbGH6TE7ZCzQaI9wP5RmxjCgsVZwXzjoqrJ3DVxDAffcC6GrmlI4sTGJWuhSmYPxG/x6hE4Z/GAFAJwDltZdiHbStUJqoKs+S3MrWIhEy8LLPoOwIhQtFmnLTkqhT94Krp3cwhuWyzjXktdTqna5n1puywNrbswtgOuv4jZBlzKLhGPqxLg1pOHgDVIdnPVuVXsl9Mi5zQr9yFmPqTX2TWxTzmBnlcynidqLHvm1kn+K8JVqUV5+LYyzMW+AmDMivBuhd25eA7hOUcDeJRqzJ5ABg/kSrh3y0MNTBPopKjN+tqw3EaXJFVzuaTayVn+jEORlWY1Y90nMQ4GxVPNKXhB9LzwRezess0/xme8ceq6Qm7jr4XVqkY3qtxFje6xMAtClQI+Y/is15hPEg8tB56hUIUMBIAPmAfrtUCsdSiWPHEHBQU7Of0KePLLmHdJfSL8i/YIXgEQfBS2w/SPS70h/M78HyWxY2T0+WyU7lPcP4tmnpiGVSSF0/axkPI+FLn1sed4npH9Y54PUl/u2/Es48vuWnzU+q/atGv+H4peH3x3r88X4i9eIR2/axDmyZI4fFDFifB3hP7FjfJraJqKvEH0ttzX87kDldbjM+SW3OTk+ot+D1iXCV4p2L/dfYS/St/AMIewFo6+faQ9pBT2C+MQChrUQTwu1STs0VonttQEic7fcd+J3r0cV4M2ErM1EzsjEnF5mKcYuY4t3MA18BZQL2ZsIb2UGADrHWKWjP888IzLuol+O7bFBM4UzVDs5xW/2BGci+GC6nJebNIjnyZxzoQd9Xpl4psUcSRH8/d9c50yPQ6gRxxW4Fb304fMRf2hR9OsNk6sxGfJpvXy19iR+MxNYJwePb/9qpsPWdHsEzWtN98c5wi46AuJ5mqKaPq3kIUtE75hLxlDJ5z/jNVzn9aUYW8FlmlpH5BD8nrERUaply4Pmktscv+8Ttkp+GdzXink98pQxpfIQUExed1SsUMUGKs21Y7aQRhvRo9V80H3auj00h2O9dEAUQi99dqiV7FboIstlv1cuYbwzKhiw9j5DeKUdDAMpbIW8OsFrIzoMcaTVBoD4OaNW8ovEelq43Ouq0Nww3hlyI3/Rv88ZFqaBg3TKcgN0IadQWmnhXLXRey549AZtBX8DkbOJku1ABVHAJl7mhsdenMAF33NbRM7j0LXLQS3cH9ZMAOippr434ByQMiiHn93gMq/eA5Nd8r0DZzi1dnrP+8Z98A9URuIAulJ49RV6AFSu1mY67JB+SEcwyI4l0s+mK5c3XKaPA0y3f3jsh0TFjAigK3cdvB6UTt79372/O2BYqRmDg/m/QaYHpC/uNFqIXYLN6MViDDN0J9rcdPdQHkemQ+COaMYIfAPgg8j362ySawAAAABJRU5ErkJggg=="
            />
          </defs>
        </svg>
      </motion.article>
    </main>
  );
};

export default Companies;
