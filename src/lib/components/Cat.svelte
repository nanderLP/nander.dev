<div class="cat-container">
	<div class="cat">
		<div class="ear ear-left" />
		<div class="ear ear-right" />
		<div class="face">
			<div class="eye eye-left">
				<div class="eye-pupil" />
			</div>
			<div class="eye eye-right">
				<div class="eye-pupil" />
			</div>
			<div class="muzzle" />
		</div>
	</div>
</div>

<style lang="scss">
	/*.cat-container {
		position: absolute;
		display: flex;
		justify-content: center;
		min-width: 200px;
		transition: all 0.5s ease;

		&:hover {
			transform: translateY(-40px);
		}

		// Cat
		.cat {
			position: relative;
			height: 50px;
			width: 50px * 1.13;

			// Ears
			.ear {
				position: absolute;
				top: -30%;
				height: 60%;
				width: 25%;
				background: var(--cat-color);

				&::after {
					transform-origin: 50% 100%;
				}
				&.ear-left {
					left: -7%;
					border-radius: 70% 30% 0% 0% / 100% 100% 0% 0%;
					transform: rotate(-15deg);

					&::before,
					&::after {
						right: 10%;
					}

					&::after {
						transform: rotate(-45deg);
					}
				}

				&.ear-right {
					right: -7%;
					border-radius: 30% 70% 0% 0% / 100% 100% 0% 0%;
					transform: rotate(15deg);

					&::before,
					&::after {
						left: 10%;
					}

					&::after {
						transform: rotate(45deg);
					}
				}
			}
			// Face
			.face {
				position: absolute;
				height: 100%;
				width: 100%;
				background: var(--bg);
				border-radius: 50%;

				.eye {
					position: absolute;
					top: 35%;
					height: 30%;
					width: 31%;
					background: var(--cat-color);
					border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;

					// Eyelids
					&::after {
						content: '';
						position: absolute;
						top: 0;
						left: 0;
						height: 0;
						width: 100%;
						border-radius: 0 0 50% 50% / 0 0 40% 40%;
						background: var(--bg);
						animation: blink 4s infinite ease-in;
					}

					@keyframes blink {
						0% {
							height: 0;
						}
						90% {
							height: 0;
						}
						92.5% {
							height: 100%;
						}
						95% {
							height: 0;
						}
						97.5% {
							height: 100%;
						}
						100% {
							height: 0;
						}
					}
					// Eyes

					&.eye-left {
						left: 0;

						&::before {
							right: -5%;
						}
					}

					&.eye-right {
						right: 0;

						&::before {
							left: -5%;
						}
					}
					// Pupils
					.eye-pupil {
						position: absolute;
						top: 25%;
						height: 50%;
						width: 20%;
						background: var(--bg);
						border-radius: 50%;
						animation: look-around 4s infinite;

						@keyframes look-around {
							0% {
								transform: translate(0);
							}
							5% {
								transform: translate(50%, -25%);
							}
							10% {
								transform: translate(50%, -25%);
							}
							15% {
								transform: translate(-100%, -25%);
							}
							20% {
								transform: translate(-100%, -25%);
							}
							25% {
								transform: translate(0, 0);
							}
							100% {
								transform: translate(0, 0);
							}
						}

						.eye-left & {
							right: 30%;
						}

						.eye-right & {
							left: 30%;
						}
					}
				}
				// Muzzle
				.muzzle {
					position: absolute;
					top: 60%;
					left: 50%;
					height: 6%;
					width: 10%;
					background: var(--cat-color);
					transform: translateX(-50%);
					border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%;
				}
			}
		}
	}*/

	.cat-container {
		position: absolute;
		display: flex;
		justify-content: center;
		min-width: 200px;
		transition: transform 0.5s ease;

		&:hover {
			transform: translateY(-40px);
		}

		// Cat
		.cat {
			position: relative;
			height: 50px;
			width: 50px * 1.13;

			// Ears
			.ear {
				position: absolute;
				top: -30%;
				height: 60%;
				width: 25%;
				background: var(--cat-color);

				&::after {
					transform-origin: 50% 100%;
				}

				&.ear-left {
					left: -7%;
					border-radius: 70% 30% 0% 0% / 100% 100% 0% 0%;
					transform: rotate(-15deg);

					&::before,
					&::after {
						right: 10%;
					}

					&::after {
						transform: rotate(-45deg);
					}
				}

				&.ear-right {
					right: -7%;
					border-radius: 30% 70% 0% 0% / 100% 100% 0% 0%;
					transform: rotate(15deg);

					&::before,
					&::after {
						left: 10%;
					}

					&::after {
						transform: rotate(45deg);
					}
				}
			}

			// Face
			.face {
				position: absolute;
				height: 100%;
				width: 100%;
				background: var(--bg);
				border-radius: 50%;

				// Eyes
				.eye {
					position: absolute;
					top: 35%;
					height: 30%;
					width: 31%;
					background: var(--cat-color);
					border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;

					// Eyelids
					&::after {
						content: '';
						position: absolute;
						top: 0;
						left: 0;
						height: 0;
						width: 100%;
						border-radius: 0 0 50% 50% / 0 0 40% 40%;
						background: var(--bg);
						animation: blink 4s infinite ease-in;
					}

					@keyframes blink {
						0% {
							height: 0;
						}
						90% {
							height: 0;
						}
						92.5% {
							height: 100%;
						}
						95% {
							height: 0;
						}
						97.5% {
							height: 100%;
						}
						100% {
							height: 0;
						}
					}

					&.eye-left {
						left: 0;

						&::before {
							right: -5%;
						}
					}

					&.eye-right {
						right: 0;

						&::before {
							left: -5%;
						}
					}
					// Pupils
					.eye-pupil {
						position: absolute;
						top: 25%;
						height: 50%;
						width: 20%;
						background: var(--bg);
						border-radius: 50%;
						animation: look-around 4s infinite;

						@keyframes look-around {
							0% {
								transform: translate(0);
							}
							5% {
								transform: translate(50%, -25%);
							}
							10% {
								transform: translate(50%, -25%);
							}
							15% {
								transform: translate(-100%, -25%);
							}
							20% {
								transform: translate(-100%, -25%);
							}
							25% {
								transform: translate(0, 0);
							}
							100% {
								transform: translate(0, 0);
							}
						}
					}
				}
				// Muzzle
				.muzzle {
					position: absolute;
					top: 60%;
					left: 50%;
					height: 6%;
					width: 10%;
					background: var(--cat-color);
					transform: translateX(-50%);
					border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%;
				}
			}
		}
	}

    // im too stupid to fix this so this will just stay here :-)
	.eye-pupil {
		.eye-left & {
			right: 30%;
		}

		.eye-right & {
			left: 30%;
		}
	}
</style>
